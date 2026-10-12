// The Daily question at the top of My community's feed: one question a day from Rehyn, the same for everyone, for
// people to answer and talk about underneath it. Open-answer prompts in the style of a daily word game ("Name a …"),
// written for Rehyn. The meeting memo suggested taking the first prompt of the day from Krillion (krillion.me); its
// prompts load inside the game and are its own catalogue, so they would need its makers' permission (or a feed from
// them). With one, `dailyQuestion` is the single place to swap in that source.

export const DAILY_QUESTIONS: readonly string[] = [
  "Name a song that always lifts your mood.",
  "Name a food that tastes like home.",
  "Name a place you'd love to visit again.",
  "What's one small thing that made you smile this week?",
  "Name a film you could watch again and again.",
  "Name a smell that takes you straight back to childhood.",
  "Name a book, or a story, that has stayed with you.",
  "What's the best piece of advice you've ever been given?",
  "Name a flower you'd plant in your perfect garden.",
  "Name a sound you find calming.",
  "Name a dish you'd love someone to cook for you tonight.",
  "Who's a famous person you'd love to have a cup of tea with?",
  "Name a hobby you've always wanted to try.",
  "Name a word that always makes you laugh.",
  "What's your favourite way to spend a Sunday morning?",
  "Name an animal you'd like to look after for a day.",
  "Name a game you loved playing as a child.",
  "What's a little routine that helps your day go well?",
  "Name a seaside town you'd recommend.",
  "Name a pudding you'd never say no to.",
  "Name a TV programme that always cheers you up.",
  "What's something you're looking forward to this month?",
  "Name a singer whose voice you love.",
  "Name your favourite season, and what you love about it.",
  "Name a city you'd like to explore.",
  "What's a skill you're proud to have learned?",
  "Name a drink that makes a day feel special.",
  "Name a bird you love to see in the garden.",
  "Name a sport you enjoy watching.",
  "What would your perfect picnic include?",
  "Name a film character you'd like as a friend.",
  "Name a family tradition you treasure.",
  "What's a kind thing someone did for you recently?",
  "Name a fruit you could eat every day.",
  "Name a piece of music that feels like a hug.",
  "Name a walk or a view near you that you love.",
  "What job did you dream of doing as a child?",
  "Name a board game or card game you're good at.",
  "Name a cake you'd bake for a celebration.",
  "Name a comedian who always makes you laugh.",
  "What's one thing that helps you rest well?",
  "Name a country whose food you'd love to try.",
  "Name a saying or a quote you like.",
  "Name something you can do now that you couldn't a month ago.",
  "Name a colour that sums up your mood today.",
  "Name a dance you'd love to learn, or used to love.",
  "Name a breakfast that sets you up for the day.",
  "Who's someone you'd like to thank today, and why?",
  "Name a festival or celebration you enjoy.",
  "Name a tree you find beautiful.",
  "What's your favourite thing about where you live?",
  "Name a gadget you couldn't do without.",
  "Name a soup that warms you up.",
  "Name a place where you feel calm.",
  "What's a memory that always makes you smile?",
  "Name a cheese you love.",
  "Name a vegetable you'd grow if you could.",
  "Name a famous painting you'd hang at home.",
  "What's a small goal you've set yourself this week?",
  "Name an old song everyone should hear.",
];

export type DailyQuestion = {
  /** "daily-2026-10-12": the day's post in the feed, where its answers are kept. */
  id: string;
  question: string;
  /** "Monday 12 October". */
  dateLabel: string;
};

const pad = (value: number) => String(value).padStart(2, "0");
const DAY_MS = 86_400_000;
/** The first day of the list (any fixed day): the questions go round from there, one a day. */
const FIRST_DAY = Date.UTC(2026, 0, 1);

/** The day's question, by the calendar day on this device: it changes at midnight, and is the same all day. */
export function dailyQuestion(now = new Date()): DailyQuestion {
  const day = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const count = DAILY_QUESTIONS.length;
  const index = (((Math.round((day - FIRST_DAY) / DAY_MS)) % count) + count) % count;
  return {
    id: `daily-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
    question: DAILY_QUESTIONS[index],
    dateLabel: now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
  };
}

/** A Daily question's post id ("daily-2026-10-12"). */
export const isDailyPostId = (id: string) => /^daily-\d{4}-\d{2}-\d{2}$/.test(id);
