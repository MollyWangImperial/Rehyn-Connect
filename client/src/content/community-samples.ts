// Sample content for the My community preview. Every person, post, group, message, poll, friend
// request, alert and number here is invented, and nothing a person does on the page leaves their
// device. The pictures are small drawings kept in /public/community-art.

// The pictures live in public/community-art: a folder called "community" would make the server
// redirect the /community page to /community/.
const art = (id: string) => `/community-art/${id}.svg`;

export type PersonId = "margaret" | "david" | "tomasz" | "anne" | "priya" | "samuel" | "joan" | "liwei";
export type Person = { id: PersonId; name: string; face: string; tint: string; about: string; town: string };

export const people: Record<PersonId, Person> = {
  margaret: { id: "margaret", name: "Margaret", face: art("e5f035b22084e040992a2bae4853b87a"), tint: "#F3D9CC", about: "Leeds", town: "Leeds" },
  david: { id: "david", name: "David", face: art("5ae96ba6c0a7a4ce0abdacea5662d031"), tint: "#CFE2D6", about: "Walks with Biscuit, his dog", town: "Dover" },
  tomasz: { id: "tomasz", name: "Tomasz", face: art("dc2c2621058c2e3cafb744564f6e0b9c"), tint: "#D5E1E6", about: "New this week", town: "Dover" },
  anne: { id: "anne", name: "Anne", face: art("762f84e9e300103ccc005eaa89800ca5"), tint: "#FBEBC2", about: "Bath", town: "Bath" },
  priya: { id: "priya", name: "Priya", face: art("abfddd7f2a1894d89beeac20f7fbbedb"), tint: "#E9E2F4", about: "Leicester", town: "Leicester" },
  samuel: { id: "samuel", name: "Samuel", face: art("a9469e8bfd054c29a713033e9eac24f0"), tint: "#DCECF4", about: "One-handed cooks", town: "Cardiff" },
  joan: { id: "joan", name: "Joan", face: art("d6d1ced4c77f6cb92d063a301a9f70b2"), tint: "#F6DDD3", about: "Garden gang", town: "Whitby" },
  liwei: { id: "liwei", name: "Li Wei", face: art("6fae8d2a2b78d33e738f97964301ed6b"), tint: "#E3EFE6", about: "Kitchen singalong", town: "Manchester" },
};
export const PERSON_IDS: PersonId[] = ["margaret", "david", "tomasz", "anne", "priya", "samuel", "joan", "liwei"];

/**
 * Everyone who can appear in My community: the example people, and Gary, who joined two days ago
 * and has no drawing (his picture is his initial). Gary is blocked when the preview starts.
 */
export type MemberId = PersonId | "gary";
export type Pronoun = "he" | "she" | "they";
export type Member = { id: MemberId; name: string; face: string | null; tint: string; ink: string; initial: string; about: string; pronoun: Pronoun };
const personPronoun: Record<PersonId, Pronoun> = { margaret: "she", david: "he", tomasz: "he", anne: "she", priya: "she", samuel: "he", joan: "she", liwei: "they" };
const asMember = (person: Person): Member => ({ id: person.id, name: person.name, face: person.face, tint: person.tint, ink: "#1E2A26", initial: person.name.slice(0, 1), about: person.about, pronoun: personPronoun[person.id] });
export const members: Record<MemberId, Member> = {
  margaret: asMember(people.margaret), david: asMember(people.david), tomasz: asMember(people.tomasz), anne: asMember(people.anne),
  priya: asMember(people.priya), samuel: asMember(people.samuel), joan: asMember(people.joan), liwei: asMember(people.liwei),
  gary: { id: "gary", name: "Gary", face: null, tint: "#DDD7CB", ink: "#4F5A55", initial: "G", about: "Joined 2 days ago", pronoun: "he" },
};
export const MEMBER_IDS: MemberId[] = [...PERSON_IDS, "gary"];
export const isPersonId = (id: MemberId): id is PersonId => id !== "gary";
/**
 * Words for sentences about someone: "he won't be told", "unblock him any time", "they are blocked".
 * `is` and `was` agree with the pronoun ("they are"); after a name, always write "is" ("Li Wei is").
 */
export const pronounWords: Record<Pronoun, { subject: string; object: string; possessive: string; is: string; was: string }> = {
  he: { subject: "he", object: "him", possessive: "his", is: "is", was: "was" },
  she: { subject: "she", object: "her", possessive: "her", is: "is", was: "was" },
  they: { subject: "they", object: "them", possessive: "their", is: "are", was: "were" },
};

/** The drawn face the person can choose to show in My community, instead of a photo or an initial. */
export const myDrawnFace = { face: art("e927f84031712ed18b12258221414d71"), tint: "#E6E2DA" };

export type SamplePhoto = { src: string; alt: string; tint: string };
export const photos = {
  tomatoes: { src: art("040900486d4ce34d68fd29407eb0c2f7"), alt: "Tomato plants in pots on a sunny windowsill", tint: "#F7E7C6" },
  dog: { src: art("461a30320ec936927d678a9926b05791"), alt: "A dog on a lead in the park", tint: "#EFEBE2" },
} satisfies Record<string, SamplePhoto>;

/** The one-tap ways to join in, so nobody has to type to take part. */
export type ReactionKind = "love" | "welldone" | "metoo" | "withyou";
export const REACTION_KINDS: ReactionKind[] = ["love", "welldone", "metoo", "withyou"];
export const reactionLabels: Record<ReactionKind, string> = { love: "Love", welldone: "Well done", metoo: "Me too", withyou: "With you" };

export type FeelingId = "hopeful" | "proud" | "calm" | "tired" | "low" | "frustrated";
export const feelings: { id: FeelingId; label: string }[] = [
  { id: "hopeful", label: "Hopeful" },
  { id: "proud", label: "Proud" },
  { id: "calm", label: "Calm" },
  { id: "tired", label: "Tired" },
  { id: "low", label: "Low" },
  { id: "frustrated", label: "Frustrated" },
];
export const FEELING_IDS: FeelingId[] = feelings.map(feeling => feeling.id);

/* ------------------------------------------------------------------ groups */

/**
 * One top-level group per condition. Members start smaller groups (subgroups) inside them. This
 * list is a placeholder until the real one is confirmed.
 */
export type ConditionId = "stroke" | "parkinsons" | "ms" | "brain" | "spine" | "joint";
export type Condition = { id: ConditionId; name: string; short: string; members: string; tint: string; ink: string };
export const conditions: Condition[] = [
  { id: "stroke", name: "Stroke", short: "Stroke", members: "12k members", tint: "#E5EEE7", ink: "#173D2F" },
  { id: "parkinsons", name: "Parkinson's", short: "Parkinson's · 3.2k", members: "3.2k members", tint: "#E9E2F4", ink: "#45357A" },
  { id: "ms", name: "Multiple sclerosis", short: "Multiple sclerosis · 2.6k", members: "2.6k members", tint: "#DCECF4", ink: "#1F4E66" },
  { id: "brain", name: "Brain injury", short: "Brain injury · 1.9k", members: "1.9k members", tint: "#FBEBC2", ink: "#6B5108" },
  { id: "spine", name: "Spinal cord injury", short: "Spinal cord injury · 1.1k", members: "1.1k members", tint: "#FBE3DB", ink: "#8F3520" },
  { id: "joint", name: "Hip and knee", short: "Hip and knee · 4.3k", members: "4.3k members", tint: "#F6EEDB", ink: "#7A5C22" },
];
export const CONDITION_IDS: ConditionId[] = conditions.map(condition => condition.id);
/** The condition groups the person is in when the preview starts. */
export const startConditions: ConditionId[] = ["stroke"];

/**
 * Who can see a subgroup. Private ones are invisible to anyone not in them: not listed, searched,
 * counted or suggested. Public ones can be found and joined by anyone in that condition.
 */
export type GroupVisibility = "private" | "public";
/** The line on a subgroup's card: a game on now, something coming up, or the last thing said. */
export type GroupActivity = { text: string; kind: "game" | "soon" | "chat" };

export type SampleGroupId = "garden" | "walk" | "cook" | "music";
export type SuggestedGroupId = "knit" | "book";
/** Subgroups started by other members, which the person is not in when the preview starts. */
export type ConditionGroupId =
  | "finding" | "young" | "tuesday-tea"
  | "dance" | "tremor" | "steps" | "pd-carers"
  | "fatigue" | "cool" | "yoga"
  | "memory" | "work"
  | "sport" | "owls"
  | "new-hip" | "knee";
export type CommunityGroupId = SampleGroupId | SuggestedGroupId | ConditionGroupId;
/** Groups that can be joined with one tap: the public ones the person isn't in yet. */
export type JoinableGroupId = SuggestedGroupId | ConditionGroupId;
export type ThemeId = "gardening" | "walking" | "cooking" | "music" | "books" | "family" | "crafts" | "chatting";

/** A cover is a drawing, or a colour with a letter or a theme's sign on it. */
export type GroupCover = { image?: string; tint: string; ink: string; initial?: string; icon?: ThemeId };
/** `minutesAgo` dates a message already there when the page opens (the lounge shows its time). */
export type GroupMessage = { id: string; who: PersonId; text: string; note?: string; photo?: SamplePhoto; hearts: number; minutesAgo?: number };
export type SampleGroup = {
  id: CommunityGroupId;
  name: string;
  /** A line about the group, under its name. */
  about: string;
  cover: GroupCover;
  /** The challenge strip's colour, and the ink drawn on it (dark enough to read on both). */
  tint: string;
  ink: string;
  members: number;
  online: number;
  faces: PersonId[];
  unread: number;
  /** Something is happening there now: a small live dot on its cover. */
  active: boolean;
  challenge: { text: string; done: number; total: number };
  messages: GroupMessage[];
  /** One message that arrives while the group is open, after a moment of "is writing". */
  incoming: GroupMessage;
  /** What the feed's "My groups" card shows under the name. */
  preview?: string;
  /** How long before the page opened its last message was said, for its row in Messages. */
  lastMinutesAgo: number;
  /** Why a group is suggested. */
  why?: string;
  /** The condition group it sits inside, and who can see it. */
  conditionId: ConditionId;
  visibility: GroupVisibility;
  /** The line on its card in "Inside {condition}". */
  activity: GroupActivity;
};

export const sampleGroups: SampleGroup[] = [
  {
    id: "garden", name: "Garden gang", lastMinutesAgo: 20, conditionId: "stroke", visibility: "private",
    activity: { text: "Chess on now · Margaret vs Joan", kind: "game" },
    about: "For anyone getting their hands back into the soil. Windowsill pots and allotments alike, at whatever pace your hands allow.",
    cover: { image: art("fb2175989c4397ad5f421824e41a5e87"), tint: "#CFE8C9", ink: "#1C4A3C" },
    tint: "#E1F0DC", ink: "#24694B", members: 6, online: 3, faces: ["margaret", "joan", "anne", "samuel"], unread: 3, active: true,
    challenge: { text: "This week: a photo of something growing", done: 4, total: 6 },
    messages: [
      { id: "g1", who: "anne", text: "Morning, gardeners. Anyone's sweet peas up yet?", hearts: 2 },
      { id: "g2", who: "margaret", text: "First tomatoes! Left hand did the picking.", photo: { ...photos.tomatoes, alt: "Tomato plants on a sunny windowsill" }, hearts: 11 },
      { id: "g3", who: "joan", text: "Mine are still green. I'm not jealous at all.", hearts: 5 },
    ],
    incoming: { id: "g4", who: "samuel", text: "Tomato tart recipe going in One-handed cooks tonight!", hearts: 3 },
    preview: "Margaret: First tomatoes!",
  },
  {
    id: "walk", name: "Morning walkers", lastMinutesAgo: 150, conditionId: "stroke", visibility: "public",
    activity: { text: "David: 7 tomorrow?", kind: "chat" },
    about: "Short walks, slow walks and round-the-block walks. We go at the pace of whoever is slowest that day.",
    cover: { image: art("41e5e4e8b1bf6c9bbe7330cc69485ef5"), tint: "#CFE6F2", ink: "#1F4E66" },
    tint: "#DCECF4", ink: "#1F4E66", members: 8, online: 2, faces: ["david", "tomasz", "priya", "liwei"], unread: 0, active: false,
    challenge: { text: "This week: one walk a little further than last week", done: 5, total: 8 },
    messages: [
      { id: "w1", who: "david", text: "Biscuit and I made it to the corner shop and back.", photo: { ...photos.dog, alt: "A dog on a lead walking in a park" }, hearts: 14 },
      { id: "w2", who: "tomasz", text: "Can I join you tomorrow? I can do the first bit.", hearts: 6 },
    ],
    incoming: { id: "w3", who: "david", text: "Of course! 7 at the park gate. We go at your pace.", hearts: 4 },
    preview: "David: 7 tomorrow?",
  },
  {
    id: "cook", name: "One-handed cooks", lastMinutesAgo: 1500, conditionId: "stroke", visibility: "public",
    activity: { text: "Samuel shared a recipe", kind: "chat" },
    about: "Recipes, tips and gadgets for cooking with one hand. Every kitchen win counts.",
    cover: { image: art("91162a45a080841062c0f9de0b0bc8fd"), tint: "#FBE3B8", ink: "#6B5108" },
    tint: "#FBEBC2", ink: "#6B5108", members: 11, online: 1, faces: ["samuel", "priya", "margaret", "anne"], unread: 0, active: false,
    challenge: { text: "This week: share one recipe you can make one-handed", done: 3, total: 11 },
    messages: [
      { id: "c1", who: "samuel", text: "Tip: a wet tea towel under the bowl stops it sliding.", hearts: 18 },
      { id: "c2", who: "priya", text: "Game changer. Made dal yesterday all by myself.", hearts: 9 },
    ],
    incoming: { id: "c3", who: "anne", text: "Does anyone have a good rocker knife to recommend?", hearts: 1 },
  },
  {
    id: "music", name: "Kitchen singalong", lastMinutesAgo: 2900, conditionId: "stroke", visibility: "private",
    activity: { text: "Ludo tonight at 7 pm", kind: "soon" },
    about: "Singing helps the words come back. A song a day, as loud or as quiet as you like.",
    cover: { image: art("242c86dad4e267c11919a79438078c19"), tint: "#E4DAF3", ink: "#45357A" },
    tint: "#E9E2F4", ink: "#45357A", members: 5, online: 2, faces: ["priya", "joan", "liwei"], unread: 1, active: false,
    challenge: { text: "This week: sing one whole chorus out loud", done: 2, total: 5 },
    messages: [
      { id: "m1", who: "priya", text: "Sang the whole chorus this morning. The neighbours have my sympathy.", hearts: 12 },
      { id: "m2", who: "joan", text: "Tomorrow's song: Que Sera, Sera. Who's in?", hearts: 4 },
    ],
    incoming: { id: "m3", who: "liwei", text: "I'm in. My grandson will judge us.", hearts: 2 },
  },
];

export const suggestedGroups: SampleGroup[] = [
  {
    id: "knit", name: "Knit and natter", why: "Joan and 6 others", lastMinutesAgo: 300, conditionId: "stroke", visibility: "public",
    activity: { text: "Dropped stitches welcome", kind: "chat" },
    about: "Knitting, crochet and a good natter. Dropped stitches welcome.",
    cover: { tint: "#FBEBC2", ink: "#6B5108", initial: "K" },
    tint: "#FBEBC2", ink: "#6B5108", members: 7, online: 1, faces: ["joan", "anne", "margaret"], unread: 0, active: false,
    challenge: { text: "This week: cast on a few stitches, any colour", done: 2, total: 7 },
    messages: [
      { id: "k1", who: "joan", text: "Finished a whole row without dropping a stitch!", hearts: 6 },
      { id: "k2", who: "anne", text: "That's the hardest bit. Well done, Joan.", hearts: 3 },
    ],
    incoming: { id: "k3", who: "margaret", text: "Bringing my scarf to show you all tomorrow.", hearts: 2 },
  },
  {
    id: "book", name: "One chapter club", why: "One chapter a week, together", lastMinutesAgo: 4300, conditionId: "stroke", visibility: "public",
    activity: { text: "One chapter a week, together", kind: "chat" },
    about: "One chapter a week, in print, large print or as an audiobook.",
    cover: { tint: "#F6DDD3", ink: "#8F3520", initial: "O" },
    tint: "#F6DDD3", ink: "#8F3520", members: 4, online: 1, faces: ["anne", "liwei", "samuel"], unread: 0, active: false,
    challenge: { text: "This week: read one chapter of any book", done: 1, total: 4 },
    messages: [
      { id: "b1", who: "anne", text: "Large print copies are on the library shelf by the door.", hearts: 4 },
      { id: "b2", who: "liwei", text: "I listened to mine as an audiobook. That counts!", hearts: 7 },
    ],
    incoming: { id: "b3", who: "samuel", text: "Chapter three done. Slowly, but done.", hearts: 3 },
  },
];

export const SAMPLE_GROUP_IDS: SampleGroupId[] = ["garden", "walk", "cook", "music"];
export const SUGGESTED_GROUP_IDS: SuggestedGroupId[] = ["knit", "book"];

/** What happened in a group today, shown as a small event in its chat. */
export const groupEvents: Partial<Record<CommunityGroupId, string>> = {
  garden: "Margaret started chess with Joan · 10:12 am",
  music: "Priya set up Ludo for 7 pm · 9:40 am",
  walk: "David made this group public · last week",
  cook: "Samuel made this group public · in June",
};

/** A subgroup started by another member, with a letter for its cover and one line said in it. */
function otherGroup(
  id: ConditionGroupId, name: string, conditionId: ConditionId, visibility: GroupVisibility, members: number, faces: PersonId[],
  cover: { tint: string; ink: string }, activity: GroupActivity, about: string, said: string,
): SampleGroup {
  return {
    id, name, about, cover: { ...cover, initial: name.charAt(0) }, tint: cover.tint, ink: cover.ink, members, online: 1, faces, unread: 0, active: false,
    challenge: { text: "This week: say hello to someone new", done: 2, total: members },
    messages: [{ id: `${id}-1`, who: faces[0], text: said, hearts: 3 }],
    incoming: { id: `${id}-2`, who: faces[1], text: "Welcome! Lovely to have you here.", hearts: 1 },
    lastMinutesAgo: 600, conditionId, visibility, activity,
  };
}
const lilac = { tint: "#E9E2F4", ink: "#45357A" };
const sky = { tint: "#DCECF4", ink: "#1F4E66" };
const mint = { tint: "#E5EEE7", ink: "#173D2F" };
const butter = { tint: "#FBEBC2", ink: "#6B5108" };
const blush = { tint: "#FBE3DB", ink: "#8F3520" };
const sand = { tint: "#F6EEDB", ink: "#7A5C22" };

/**
 * Subgroups other members started inside each condition. The private ones ("Tuesday tea",
 * "Carers' corner") are here to prove the rule: the person is not in them, so the model never
 * shows, counts, searches or suggests them.
 */
export const conditionGroups: SampleGroup[] = [
  otherGroup("finding", "Finding words", "stroke", "public", 42, ["anne", "liwei", "samuel"], lilac, { text: "Slow, kind chat for aphasia", kind: "chat" }, "A slow, kind chat for anyone finding words hard after a stroke. Take all the time you need.", "Today's word was 'marmalade'. Took me a while, but I got there."),
  otherGroup("young", "Young stroke survivors", "stroke", "public", 120, ["tomasz", "priya", "david"], sky, { text: "Back to work, kids, and more", kind: "chat" }, "For anyone who had a stroke young: work, children, friends and everything else.", "First full week back at work. Tired, but proud."),
  otherGroup("tuesday-tea", "Tuesday tea", "stroke", "private", 4, ["joan", "liwei", "priya"], butter, { text: "Tea at 3 on Tuesdays", kind: "soon" }, "A private tea for four old friends.", "Same table as last week?"),
  otherGroup("dance", "Dance for balance", "parkinsons", "public", 64, ["joan", "david", "anne"], lilac, { text: "Seated dance on Tuesdays", kind: "soon" }, "Seated and standing dance for balance and fun.", "Tuesday's waltz had us all smiling."),
  otherGroup("tremor", "Tremor and tea", "parkinsons", "public", 23, ["margaret", "samuel", "liwei"], butter, { text: "Tips for steady cups", kind: "chat" }, "Tips for steady cups, and a natter while we drink them.", "A heavier mug really does help."),
  otherGroup("steps", "Big steps walking", "parkinsons", "public", 31, ["tomasz", "priya", "joan"], sky, { text: "Walk together on Saturdays", kind: "soon" }, "Big steps, slow pace, good company.", "Saturday at 10 by the bandstand."),
  otherGroup("pd-carers", "Carers' corner", "parkinsons", "private", 6, ["anne", "david", "samuel"], blush, { text: "A quiet place to talk", kind: "chat" }, "A private corner for people caring for someone.", "Thinking of you all this week."),
  otherGroup("fatigue", "Fatigue friends", "ms", "public", 48, ["anne", "liwei", "david"], sky, { text: "Pacing tips that work", kind: "chat" }, "Pacing, rest and the tips that really work.", "Spoon count today: six. Spent them well."),
  otherGroup("cool", "Cool and calm", "ms", "public", 19, ["priya", "samuel", "joan"], mint, { text: "Staying cool in summer", kind: "chat" }, "Staying cool when the weather isn't.", "Cooling scarves are back in the shops."),
  otherGroup("yoga", "Seated yoga", "ms", "public", 37, ["margaret", "tomasz", "anne"], blush, { text: "Sessions on Thursdays", kind: "soon" }, "Gentle seated yoga, every Thursday.", "Thursday's stretch was just right."),
  otherGroup("memory", "Memory makers", "brain", "public", 26, ["david", "joan", "liwei"], butter, { text: "Daily notes and reminders", kind: "chat" }, "Notes, lists and reminders that help.", "My fridge is now mostly sticky notes."),
  otherGroup("work", "Back to work", "brain", "public", 33, ["tomasz", "samuel", "anne"], mint, { text: "First weeks back", kind: "chat" }, "For the first weeks back at work.", "Asked for a quieter desk. They said yes!"),
  otherGroup("sport", "Adaptive sport", "spine", "public", 41, ["samuel", "priya", "david"], blush, { text: "Try-it days near you", kind: "soon" }, "Wheelchair sport and try-it days near you.", "Tried wheelchair tennis. Hooked."),
  otherGroup("owls", "Night owls", "spine", "public", 15, ["liwei", "anne", "joan"], lilac, { text: "For the 3 am wake-ups", kind: "chat" }, "For the 3 am wake-ups. Someone is always here.", "Anyone else up? Kettle's on."),
  otherGroup("new-hip", "New hip club", "joint", "public", 58, ["margaret", "david", "samuel"], sand, { text: "Weeks one to six", kind: "chat" }, "The first six weeks with a new hip.", "Week three: round the garden twice."),
  otherGroup("knee", "Knee buddies", "joint", "public", 29, ["joan", "tomasz", "priya"], sky, { text: "Exercise check-ins", kind: "chat" }, "Check in after your knee exercises.", "Did all my bends today."),
];
export const CONDITION_GROUP_IDS = conditionGroups.map(group => group.id) as ConditionGroupId[];

/* ------------------------------------------------------------------- games */

/** Traditional games only, each with the number of players it needs. Games are for private groups. */
export type GameId = "chess" | "draughts" | "xiangqi" | "go" | "backgammon" | "ludo" | "dominoes" | "mahjong";
export type GameInfo = { id: GameId; name: string; min: number; max: number; time: string; tint: string };
export const GAMES: GameInfo[] = [
  { id: "chess", name: "Chess", min: 2, max: 2, time: "about 30 min", tint: "#E5EEE7" },
  { id: "draughts", name: "Draughts", min: 2, max: 2, time: "about 15 min", tint: "#FBE3DB" },
  { id: "xiangqi", name: "Chinese chess", min: 2, max: 2, time: "about 30 min", tint: "#FBEBC2" },
  { id: "go", name: "Go", min: 2, max: 2, time: "as long as you like", tint: "#F1EBDD" },
  { id: "backgammon", name: "Backgammon", min: 2, max: 2, time: "about 20 min", tint: "#DCECF4" },
  { id: "ludo", name: "Ludo", min: 2, max: 4, time: "about 25 min", tint: "#E9E2F4" },
  { id: "dominoes", name: "Dominoes", min: 2, max: 4, time: "about 15 min", tint: "#F6EEDB" },
  { id: "mahjong", name: "Mahjong", min: 4, max: 4, time: "about 45 min", tint: "#E5EEE7" },
];
export const GAME_IDS: GameId[] = GAMES.map(game => game.id);
export const gameInfo = (id: GameId): GameInfo => GAMES.find(game => game.id === id) ?? GAMES[0];

/**
 * Games already going in the example groups. Chess moves are kept as codes ("e2e4"). Margaret vs
 * Joan has reached White's 14th move; the person's own game with Margaret has just begun.
 */
export type SampleGame = {
  id: string;
  groupId: SampleGroupId;
  type: GameId;
  /** Who is playing, besides the person when `withYou` is set. */
  players: PersonId[];
  withYou: boolean;
  state: "playing" | "scheduled";
  moves: string[];
  /** When it started, or when it will. */
  when: string;
  watchers: PersonId[];
};
export const sampleGames: SampleGame[] = [
  {
    id: "garden-chess", groupId: "garden", type: "chess", players: ["margaret", "joan"], withYou: false, state: "playing", when: "10:12 am", watchers: ["anne", "samuel"],
    moves: ["e2e4", "e7e5", "g1f3", "b8c6", "f1c4", "f8c5", "c2c3", "g8f6", "d2d3", "d7d6", "e1g1", "e8g8", "f1e1", "a7a6", "c4b3", "c5a7", "h2h3", "h7h6", "b1d2", "f8e8", "d2f1", "c8e6", "f1g3", "d8d7", "b3c2", "a8d8", "d3d4"],
  },
  { id: "margaret-chess", groupId: "garden", type: "chess", players: ["margaret"], withYou: true, state: "playing", when: "10:12 am", watchers: ["anne", "samuel", "joan"], moves: ["e2e4", "e7e5", "g1f3", "b8c6"] },
  { id: "music-ludo", groupId: "music", type: "ludo", players: ["priya", "joan", "liwei"], withYou: false, state: "scheduled", when: "Tonight at 7 pm", watchers: [], moves: [] },
];
/** Quick phrases for the people watching a game, and the answer each one gets. */
export const watcherPhrases: { label: string; tone: QuickTone; reply: { who: PersonId; text: string } }[] = [
  { label: "Good move!", tone: "amber", reply: { who: "margaret", text: "Flattery will not save your knight." } },
  { label: "Hmm, let me think", tone: "mint", reply: { who: "anne", text: "Take your time, love. No clock!" } },
  { label: "Cup of tea break?", tone: "rose", reply: { who: "margaret", text: "Always. Two sugars, please." } },
];

/* ---------------------------------------------------------- start a group */

export type GroupTheme = { id: ThemeId; label: string; names: [string, string, string]; image?: string; tint: string; ink: string };
export const groupThemes: GroupTheme[] = [
  { id: "gardening", label: "Gardening", names: ["Garden gang", "Green fingers", "Windowsill growers"], image: art("fb2175989c4397ad5f421824e41a5e87"), tint: "#CFE8C9", ink: "#1C4A3C" },
  { id: "walking", label: "Walking", names: ["Morning walkers", "One step club", "Round the block"], image: art("41e5e4e8b1bf6c9bbe7330cc69485ef5"), tint: "#CFE6F2", ink: "#1F4E66" },
  { id: "cooking", label: "Cooking", names: ["One-handed cooks", "Sunday roast club", "Kitchen table"], image: art("91162a45a080841062c0f9de0b0bc8fd"), tint: "#FBE3B8", ink: "#6B5108" },
  { id: "music", label: "Music", names: ["Kitchen singalong", "Golden oldies", "Radio friends"], image: art("242c86dad4e267c11919a79438078c19"), tint: "#E4DAF3", ink: "#45357A" },
  { id: "books", label: "Books", names: ["Slow readers", "One chapter club", "Large print gang"], tint: "#F6DDD3", ink: "#8F3520" },
  { id: "family", label: "Family", names: ["Proud grandparents", "Family album", "School run crew"], tint: "#FBE3DB", ink: "#8F3520" },
  { id: "crafts", label: "Crafts", names: ["Knit and natter", "Makers corner", "Paint club"], tint: "#FBEBC2", ink: "#6B5108" },
  { id: "chatting", label: "Just chatting", names: ["Tea and a natter", "The regulars", "Night owls"], tint: "#E3EFE6", ink: "#1C4A3C" },
];
export const THEME_IDS: ThemeId[] = groupThemes.map(theme => theme.id);

/** A board of light and sage squares, the cover of a games group. */
const checkerCover = `data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' preserveAspectRatio='xMidYMid slice'><defs><pattern id='c' width='30' height='30' patternUnits='userSpaceOnUse'><rect width='30' height='30' fill='#EFE6D2'/><path d='M0 0h15v15H0zM15 15h15v15H15z' fill='#8DB09A'/></pattern></defs><rect width='240' height='120' fill='url(#c)'/></svg>")}`;
/** Starting a group offers a games theme too. Its icon is drawn by the games pieces, not ThemeIcon. */
export type StartThemeId = ThemeId | "games";
export type StartTheme = Omit<GroupTheme, "id"> & { id: StartThemeId };
export const gamesTheme: StartTheme = { id: "games", label: "Games", names: ["Board game club", "Chess and tea", "Friday games"], image: checkerCover, tint: "#E5EEE7", ink: "#173D2F" };
/** The themes "What's it about?" offers, in order. Crafts stays readable for groups started before. */
export const startThemes: StartTheme[] = [...groupThemes.slice(0, 4), gamesTheme, ...groupThemes.filter(theme => theme.id === "books" || theme.id === "family" || theme.id === "chatting")];
export const START_THEME_IDS: StartThemeId[] = [...THEME_IDS, "games"];
/** The example friends who can be asked along, and the two ticked to begin with. */
export const inviteFriends: PersonId[] = ["margaret", "joan", "anne", "david", "priya", "samuel"];
export const defaultInvites: PersonId[] = ["margaret", "joan"];
export const groupHellos = ["Hello everyone!", "Welcome to the group.", "Who has news?"];
export const startedGroupChallenge = "This week: share one thing that made you smile";
export const GROUP_NAME_LIMIT = 40;

/* -------------------------------------------------------------------- feed */

export type SampleComment = { who: PersonId; text: string };
export type SamplePost = {
  id: string;
  who: MemberId;
  group?: SampleGroupId;
  where: string;
  when: string;
  /** What the post says. For a voice note, these are the words written underneath it. */
  text: string;
  photo?: SamplePhoto;
  voice?: { seconds: number };
  win?: boolean;
  reactions: { kind: ReactionKind; count: number }[];
  comments: SampleComment[];
  /** Show the latest comment under the post before the thread is opened. */
  peek?: boolean;
  /** Replies that can be sent with one tap. */
  quickReplies: string[];
  /** A sad or upsetting post: gentle mode keeps it covered until it is tapped. Says what it is about. */
  gentle?: string;
};

export const feedPosts: SamplePost[] = [
  {
    // Gary is blocked when the preview starts, so this post only shows once he is unblocked.
    id: "p-gary", who: "gary", where: "Joined 2 days ago", when: "5 minutes ago",
    text: "Message me for a herbal cure that fixes stroke damage in two weeks. Only £49!",
    reactions: [],
    comments: [],
    quickReplies: [],
  },
  {
    id: "p-margaret", who: "margaret", group: "garden", where: "Leeds", when: "20 minutes ago",
    text: "First tomatoes off the windowsill! Picked them with my left hand, thank you very much.",
    photo: photos.tomatoes,
    reactions: [{ kind: "love", count: 24 }, { kind: "welldone", count: 11 }, { kind: "metoo", count: 3 }],
    comments: [
      { who: "joan", text: "Left hand doing the picking! That's brilliant." },
      { who: "anne", text: "They look lovely. Mine are still green." },
      { who: "samuel", text: "Tomato tart on the way, I hope." },
      { who: "priya", text: "Well done you, Margaret." },
      { who: "liwei", text: "My grandson would eat the lot." },
      { who: "david", text: "Save me one, Margaret." },
    ],
    peek: true,
    quickReplies: ["Lovely!", "Well done!", "Save me one!"],
  },
  {
    id: "p-tomasz", who: "tomasz", where: "New here", when: "1 hour ago",
    text: "First week home. A bit scared, if I'm honest. What helped you settle in?",
    reactions: [{ kind: "withyou", count: 18 }, { kind: "metoo", count: 7 }],
    comments: [
      { who: "anne", text: "My first week was the hardest too. It does get lighter, promise." },
      { who: "david", text: "Come walking with us. Biscuit loves new people." },
      { who: "margaret", text: "Little routines helped me. Tea at the same time each morning." },
      { who: "priya", text: "Be gentle with yourself. Resting counts as doing something." },
      { who: "joan", text: "I wrote down one good thing each night. It helped more than I expected." },
      { who: "samuel", text: "Let people help with the small jobs. They want to." },
      { who: "liwei", text: "Welcome, Tomasz. You're not on your own here." },
      { who: "anne", text: "Pop into the lounge whenever you like. Someone's always about." },
      { who: "margaret", text: "We're glad you're here." },
    ],
    quickReplies: ["Welcome, Tomasz.", "You're not alone.", "One day at a time."],
  },
  {
    id: "p-priya", who: "priya", group: "music", where: "Leicester", when: "2 hours ago",
    text: "Sang the whole chorus this morning, start to finish. The words came slowly, but every one of them came out.",
    voice: { seconds: 12 },
    reactions: [{ kind: "welldone", count: 12 }, { kind: "love", count: 8 }],
    comments: [
      { who: "joan", text: "Que Sera, Sera next?" },
      { who: "liwei", text: "Every word! Wonderful." },
      { who: "margaret", text: "I'd have loved to hear it." },
    ],
    quickReplies: ["Wonderful!", "Well done!", "Sing it again!"],
  },
  {
    // A hard day: gentle mode (on to begin with) keeps it covered until it is tapped.
    id: "p-samuel", who: "samuel", group: "cook", where: "Cardiff", when: "3 hours ago",
    text: "Rough day. I couldn't manage the stairs this morning and it felt like I'd gone right back to the start.",
    gentle: "a hard day",
    reactions: [{ kind: "withyou", count: 14 }, { kind: "metoo", count: 6 }],
    comments: [
      { who: "anne", text: "Those days pass. You haven't gone back, Samuel." },
      { who: "priya", text: "I had one last month. Be kind to yourself today." },
      { who: "david", text: "Stairs tomorrow, with a cup of tea at the top." },
    ],
    quickReplies: ["With you, Samuel.", "Those days pass.", "Be kind to yourself."],
  },
  {
    id: "p-joan", who: "joan", where: "Whitby", when: "3 hours ago",
    text: "Buttoned my own cardigan this morning. All five buttons. It took ten minutes and I didn't mind one bit.",
    win: true,
    reactions: [{ kind: "welldone", count: 15 }, { kind: "love", count: 9 }, { kind: "metoo", count: 4 }],
    comments: [
      { who: "margaret", text: "All five! Well done, Joan." },
      { who: "anne", text: "Buttons are the worst. Brilliant." },
      { who: "samuel", text: "Ten minutes well spent." },
      { who: "priya", text: "Me too, last week. Such a good feeling." },
    ],
    quickReplies: ["Well done, Joan!", "Me too!", "Brilliant!"],
  },
  {
    // Mentions "hospital", one of the hidden words to begin with, so it waits behind a note.
    id: "p-anne", who: "anne", where: "Bath", when: "4 hours ago",
    text: "Back at the hospital for a check-up this morning. All fine, just tired now. Feet up with a crossword.",
    reactions: [{ kind: "withyou", count: 6 }, { kind: "love", count: 4 }],
    comments: [
      { who: "margaret", text: "Glad it all went well, Anne." },
      { who: "david", text: "Rest up. Crosswords count as therapy." },
    ],
    quickReplies: ["Glad it's fine!", "Rest well, Anne.", "Thinking of you."],
  },
];
export const FEED_POST_IDS = feedPosts.map(post => post.id);

/* ------------------------------------------------------------------ lounge */

export type LoungeMessage = GroupMessage;
export type LoungeEvent =
  | { kind: "typing"; who: PersonId }
  | { kind: "message"; message: LoungeMessage }
  | { kind: "arrive"; who: PersonId; text: string };
export type QuickTone = "mint" | "blue" | "amber" | "lilac" | "rose";
export type PollOption = { id: string; label: string; votes: number; fill: string };

export const lounge = {
  here: 14,
  /** One event every this many milliseconds, until the script has run. */
  everyMs: 2600,
  starter: "What are you looking forward to this week?",
  faces: ["margaret", "david", "anne", "tomasz"] as PersonId[],
  messages: [
    { id: "l1", who: "margaret", text: "My granddaughter visits on Saturday. I'm going to pour the tea myself.", hearts: 6, minutesAgo: 9 },
    { id: "l2", who: "tomasz", note: "New member", text: "First week home. A bit scared, if I'm honest.", hearts: 9, minutesAgo: 6 },
    { id: "l3", who: "anne", text: "My first week was the hardest too. It does get lighter, promise.", hearts: 5, minutesAgo: 5 },
    { id: "l4", who: "david", text: "Come walking with us on Wednesday, Tomasz. Seven o'clock by the harbour. Biscuit loves new people.", hearts: 4, minutesAgo: 3 },
  ] as LoungeMessage[],
  /** The house rules beside the lounge. */
  rules: [
    "Be kind. Everyone here is recovering at their own pace.",
    "Share experience, not medical advice. That stays with your care team.",
    "Report anything that worries you in one tap. It stays private.",
  ],
  script: [
    { kind: "typing", who: "priya" },
    { kind: "message", message: { id: "l5", who: "priya", text: "Morning all! Sun's out in Leicester today.", hearts: 2 } },
    { kind: "arrive", who: "joan", text: "Joan just came in" },
    { kind: "typing", who: "joan" },
    { kind: "message", message: { id: "l6", who: "joan", text: "Kettle's on. Who wants one?", hearts: 4 } },
    { kind: "typing", who: "david" },
    { kind: "message", message: { id: "l7", who: "david", text: "Biscuit says hello to the newcomers.", photo: photos.dog, hearts: 7 } },
    { kind: "arrive", who: "samuel", text: "Samuel just came in" },
    { kind: "typing", who: "anne" },
    { kind: "message", message: { id: "l8", who: "anne", text: "Tomasz, how was your first night home?", hearts: 3 } },
  ] as LoungeEvent[],
  waves: [
    { who: "tomasz", note: "Dover · new this week" },
    { who: "margaret", note: "Leeds" },
    { who: "anne", note: "Bath" },
    { who: "priya", note: "Leicester" },
    { who: "joan", note: "Whitby" },
  ] as { who: PersonId; note: string }[],
  poll: {
    question: "What's in your mug right now?",
    options: [
      { id: "tea", label: "Tea", votes: 9, fill: "#F3E3DA" },
      { id: "coffee", label: "Coffee", votes: 5, fill: "#E7DCCB" },
      { id: "cocoa", label: "Hot chocolate", votes: 3, fill: "#E9E2F4" },
    ] as PollOption[],
  },
  /** `to` is who a reply is for: it is left out while that person is out of sight. */
  quickReplies: [
    { label: "Hello everyone", text: "Hello everyone!", tone: "mint" },
    { label: "Welcome, Tomasz", text: "Welcome, Tomasz!", tone: "blue", to: "tomasz" },
    { label: "Well done, Margaret", text: "Well done, Margaret!", tone: "amber", to: "margaret" },
    { label: "Thinking of you all", text: "Thinking of you all.", tone: "lilac" },
  ] as { label: string; text: string; tone: QuickTone; to?: PersonId }[],
};
export const POLL_OPTION_IDS = lounge.poll.options.map(option => option.id);

export const groupQuickReplies: { label: string; text: string; tone: QuickTone }[] = [
  { label: "Lovely!", text: "Lovely!", tone: "rose" },
  { label: "Well done", text: "Well done!", tone: "amber" },
  { label: "Me too", text: "Me too.", tone: "blue" },
];

/* ---------------------------------------------------------- Sunday circle */

export type CircleSeat = PersonId | "alira" | "you";
/**
 * Who sits in the circle and how the teacup goes round. What the circle is about (its event: a film night, a
 * book club, football together …), what everyone says and what comes up next are in circle-events.ts.
 */
export const circle = {
  /** The teacup moves on this often, unless it is with you. */
  everyMs: 3400,
  /** Who speaks next. "you" is skipped until you have taken your seat. */
  order: ["alira", "margaret", "david", "priya", "tomasz", "you", "joan", "anne", "liwei", "samuel"] as CircleSeat[],
  /** Where each one sits: ten places round the circle, clockwise from the top. */
  seats: { alira: 0, david: 1, liwei: 2, tomasz: 3, priya: 4, you: 5, anne: 6, samuel: 7, margaret: 8, joan: 9 } as Record<CircleSeat, number>,
  /** Lines that send a little warmth floating up when they are said. */
  warmLines: ["margaret", "priya"] as CircleSeat[],
  hello: "Hello everyone. Glad to be here.",
};
/** Every seat in the circle, the person's own included. */
export const CIRCLE_SEATS = Object.keys(circle.seats).length;

/* ----------------------------------------------------------------- friends */

// Who is who when the preview starts. Each example person is in one place only:
//   friends            David, Margaret and Anne (Joan's and Li Wei's mutual friends)
//   asking to be yours Joan and Li Wei
//   asked by you       Tomasz, two days ago
//   people you may know Samuel and Priya
//   blocked            Gary, three days ago

export type FriendsTab = "requests" | "sent" | "friends" | "blocked";
export const FRIENDS_TABS: FriendsTab[] = ["requests", "sent", "friends", "blocked"];
export const friendsTabLabels: Record<FriendsTab, string> = { requests: "For you", sent: "Sent", friends: "Friends", blocked: "Blocked" };

/** The friends the person has to begin with, and how each one is doing right now. */
export type StartFriend = { who: PersonId; status: string; online: boolean };
export const startFriends: StartFriend[] = [
  { who: "david", status: "Online now", online: true },
  { who: "margaret", status: "Active 1 hour ago", online: false },
  { who: "anne", status: "Active yesterday", online: false },
];

export type IncomingRequestId = "joan" | "liwei";
export type IncomingRequest = { who: IncomingRequestId; where: string; mutual: PersonId[]; mutualText: string; note: string };
/** Friend requests waiting for the person. */
export const incomingRequests: IncomingRequest[] = [
  { who: "joan", where: "Whitby · in Garden gang with you", mutual: ["margaret", "anne"], mutualText: "Margaret and Anne are friends of yours", note: "Saw you in Garden gang. Fancy being friends?" },
  { who: "liwei", where: "Manchester · sits near you in Sunday circle", mutual: ["david"], mutualText: "David is a friend of yours", note: "" },
];
export const INCOMING_REQUEST_IDS: IncomingRequestId[] = incomingRequests.map(request => request.who);

/** Requests the person sent before this visit, still waiting for a yes. */
export const startSent: { who: PersonId; daysAgo: number }[] = [{ who: "tomasz", daysAgo: 2 }];

export const friendSuggestions: { who: PersonId; why: string }[] = [
  { who: "samuel", why: "Also in One-handed cooks" },
  { who: "priya", why: "Friends with David and Joan" },
];

/** People blocked before this visit. */
export const startBlocked: { who: MemberId; daysAgo: number }[] = [{ who: "gary", daysAgo: 3 }];

/* ---------------------------------------------------------------- messages */

// Messages between the person and their friends. The friends' words are examples; anything the
// person writes stays on this device, and a friend's answer is an example too.

/** One line in a conversation, `minutesAgo` before the page opened. A voice note has its words as `text`. */
export type DirectLine = { id: string; from: "them" | "you"; text: string; minutesAgo: number; voice?: { seconds: number } };
export type Conversation = {
  who: PersonId;
  lines: DirectLine[];
  /** How many of the newest lines from them are waiting to be read. */
  unread: number;
  /** What they say back, a moment after the person writes (once a visit). */
  reply: string;
  quickReplies: string[];
  about: string;
  memberSince: string;
  friendsSince: string;
};

export const conversations: Conversation[] = [
  {
    who: "margaret", unread: 2,
    lines: [
      { id: "dm-m1", from: "you", text: "Those tomatoes look wonderful. Are you saving any?", minutesAgo: 24 },
      { id: "dm-m2", from: "them", text: "The rest are going in a tart for Saturday. My granddaughter is helping.", minutesAgo: 13 },
      { id: "dm-m3", from: "them", text: "I promised you one, so I kept the best one for you.", minutesAgo: 12 },
    ],
    reply: "You're very welcome. I'll bring it round on Sunday, with a slice of the tart.",
    quickReplies: ["Thank you", "That's lovely to hear", "Speak soon"],
    about: "Gardener, grandmother and proud owner of the first tomatoes of the year.",
    memberSince: "March 2026", friendsSince: "September 2026",
  },
  {
    who: "david", unread: 1,
    lines: [
      { id: "dm-d1", from: "you", text: "How did Biscuit get on at the vet?", minutesAgo: 180 },
      { id: "dm-d2", from: "them", text: "Biscuit and I are doing the canal walk on Wednesday at seven. Fancy coming along? We'll go slowly.", minutesAgo: 40, voice: { seconds: 18 } },
    ],
    reply: "Brilliant. Seven at the park gate, then. Biscuit will be thrilled.",
    quickReplies: ["Count me in", "Maybe next time", "Thank you"],
    about: "Walks with Biscuit, his dog, most mornings. Always glad of company at a slow pace.",
    memberSince: "January 2026", friendsSince: "August 2026",
  },
  {
    who: "anne", unread: 0,
    lines: [
      { id: "dm-a1", from: "you", text: "It was so good to talk on Thursday.", minutesAgo: 1500 },
      { id: "dm-a2", from: "them", text: "Thank you for Thursday. It meant a lot to talk to someone who gets it.", minutesAgo: 1440 },
    ],
    reply: "Same time next week? I'll bring the biscuits.",
    quickReplies: ["Me too", "Same time next week?", "Thinking of you"],
    about: "Retired teacher from Bath. Crosswords, tea and a bit of gardening.",
    memberSince: "February 2026", friendsSince: "September 2026",
  },
];
export const CONVERSATION_IDS: PersonId[] = conversations.map(item => item.who);
/** For a friend with no messages yet: how a new conversation starts. */
export const newConversation = {
  reply: "Hello! Lovely to hear from you.",
  quickReplies: ["Hello!", "How are you doing?", "Thinking of you"],
};

/* ------------------------------------------------------------------ safety */

export type ReportReason = "money" | "health" | "unkind" | "fake" | "other";
export const reportReasons: { id: ReportReason; label: string; tint: string; ink: string }[] = [
  { id: "money", label: "Selling or asking for money", tint: "#FBEBC2", ink: "#6B5108" },
  { id: "health", label: "Unsafe health advice", tint: "#FBE3DB", ink: "#8F3520" },
  { id: "unkind", label: "Unkind or bullying", tint: "#E9E2F4", ink: "#45357A" },
  { id: "fake", label: "Pretending to be someone", tint: "#DCECF4", ink: "#1F4E66" },
  { id: "other", label: "Something else", tint: "#EBE7DE", ink: "#4F5A55" },
];
export const REPORT_REASONS: ReportReason[] = reportReasons.map(reason => reason.id);

/* ------------------------------------------------------------------ alerts */

export type AlertId = "a-circle" | "a-joan" | "a-garden" | "a-liwei";
/** Where an alert leads: the Friends drawer at a tab, one of the person's groups, or a space. */
export type AlertTarget =
  | { kind: "friends"; tab: FriendsTab }
  | { kind: "group"; group: SampleGroupId }
  | { kind: "space"; space: "feed" | "lounge" | "circle" | "groups" | "settings" | "safety" };
export type CommunityAlert = { id: AlertId; who: PersonId | null; icon: "friend" | "group" | "circle"; title: string; detail: string; when: string; target: AlertTarget };
/** What is new in My community, newest first. The toolbar shows "Alerts, 4 new" until they are seen. */
export const communityAlerts: CommunityAlert[] = [
  { id: "a-circle", who: null, icon: "circle", title: "Sunday circle is open", detail: "One seat is kept for you", when: "Now", target: { kind: "space", space: "circle" } },
  { id: "a-joan", who: "joan", icon: "friend", title: "Joan wants to be friends", detail: "Saw you in Garden gang. Fancy being friends?", when: "10 minutes ago", target: { kind: "friends", tab: "requests" } },
  { id: "a-garden", who: "margaret", icon: "group", title: "3 new messages in Garden gang", detail: "Margaret: First tomatoes!", when: "20 minutes ago", target: { kind: "group", group: "garden" } },
  { id: "a-liwei", who: "liwei", icon: "friend", title: "Li Wei wants to be friends", detail: "Sits near you in Sunday circle", when: "1 hour ago", target: { kind: "friends", tab: "requests" } },
];
export const ALERT_IDS: AlertId[] = communityAlerts.map(alert => alert.id);

/* --------------------------------------------------------------- settings */

/** The picture the person shows: their photo, a monogram, a portrait, an emblem, an illustrated face or the drawn face. */
export { PICTURE_CHOICES, type PictureChoice } from "./community-pictures";
export type RequestsFrom = "everyone" | "friendsOfFriends" | "noOne";
export type MessagesFrom = "friends" | "friendsAndGroups" | "noOne";
export type PostsSeenBy = "everyone" | "friends" | "onlyMe";
export type TextSize = "smaller" | "normal" | "bigger";
export type BreakChoice = "none" | "day" | "week";

/** The choices on the Community settings page, in the order they are shown. */
export const settingsChoices = {
  requestsFrom: [{ id: "everyone", label: "Everyone" }, { id: "friendsOfFriends", label: "Friends of friends" }, { id: "noOne", label: "No one" }] as { id: RequestsFrom; label: string }[],
  messagesFrom: [{ id: "friends", label: "Only friends" }, { id: "friendsAndGroups", label: "Friends and my groups" }, { id: "noOne", label: "No one" }] as { id: MessagesFrom; label: string }[],
  /** Who sees the person's own posts in the feed. */
  postsSeenBy: [{ id: "everyone", label: "Everyone" }, { id: "friends", label: "Friends" }, { id: "onlyMe", label: "Only me" }] as { id: PostsSeenBy; label: string }[],
  /** The size of post text at each choice (normal is the size the feed was designed at). */
  textSize: [{ id: "smaller", label: "Smaller", px: 16 }, { id: "normal", label: "Normal", px: 19 }, { id: "bigger", label: "Bigger", px: 23 }] as { id: TextSize; label: string; px: number }[],
  /** When quiet time can start, as hours of the day (7 pm to 11 pm). It ends at 8 am. */
  quietFrom: [19, 20, 21, 22, 23],
  breakFor: [{ id: "none", label: "No break" }, { id: "day", label: "1 day" }, { id: "week", label: "1 week" }] as { id: BreakChoice; label: string }[],
};
export const REQUESTS_FROM: RequestsFrom[] = settingsChoices.requestsFrom.map(choice => choice.id);
export const MESSAGES_FROM: MessagesFrom[] = settingsChoices.messagesFrom.map(choice => choice.id);
export const POSTS_SEEN_BY: PostsSeenBy[] = settingsChoices.postsSeenBy.map(choice => choice.id);
export const TEXT_SIZES: TextSize[] = settingsChoices.textSize.map(choice => choice.id);
export const BREAK_CHOICES: BreakChoice[] = settingsChoices.breakFor.map(choice => choice.id);
/** Words hidden to begin with, and some that can be added with one tap. */
export const startHiddenWords = ["hospital", "falls"];
export const suggestedHiddenWords = ["money", "cure", "politics"];
