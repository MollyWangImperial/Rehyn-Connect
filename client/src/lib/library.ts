import { findMedia } from "@/content/ischaemic-media";
import { learnArticles, type LearnArticle } from "@/content/my-time-learn";
import {
  libraryLetters,
  librarySections,
  libraryStories,
  MOST_READ,
  type ContentType,
  type ItemKind,
  type LibraryCondition,
  type LibraryGroup,
  type LibraryItem,
  type LibraryLetter,
  type LibrarySection,
  type LibraryStory,
} from "@/content/library";

// Finding things in the Library, and the addresses of its pages. Addresses are relative to
// /library (the page is a nested route), so "/stroke/ischaemic" is /library/stroke/ischaemic.

export type ConditionPlace = { section: LibrarySection; group: LibraryGroup; condition: LibraryCondition };
export type ItemPlace = ConditionPlace & { item: LibraryItem; type: ContentType };

export const CONTENT_TYPES: ContentType[] = ["understand", "recover", "liveWell", "watch"];
export const contentTitle = (type: ContentType, condition?: LibraryCondition) =>
  type === "understand" ? "Understand" : type === "recover" ? condition?.content?.recoverTitle ?? "Explore" : type === "liveWell" ? "Live well" : "Watch & listen";

export const sectionHref = (section: Pick<LibrarySection, "id">) => `/${section.id}`;
export const conditionHref = (groupId: string, conditionId: string) => `/${groupId}/${conditionId}`;
export const itemHref = (place: { group: { id: string }; condition: { id: string }; item: { id: string } }) => `/${place.group.id}/${place.condition.id}/${place.item.id}`;
export const storyHref = (storyId: string, chapter?: string) => `/stories/${storyId}${chapter ? `#chapter-${chapter}` : ""}`;
export const letterHref = (letterId: string) => `/letters/${letterId}`;
export const STORIES_HREF = "/stories";

/** Every condition with its section and group, in the order the Library lists them. */
export const allConditions = (): ConditionPlace[] =>
  librarySections.flatMap(section => section.groups.flatMap(group => group.conditions.map(condition => ({ section, group, condition }))));

/** Sections that were merged: their old addresses still open the section they became. */
export const SECTION_ALIASES: Record<string, string> = { "heart-circulation": "heart-lungs", "lungs-breathing": "heart-lungs" };

export const findSection = (id: string | undefined) => {
  const wanted = id && SECTION_ALIASES[id] ? SECTION_ALIASES[id] : id;
  return librarySections.find(section => section.id === wanted);
};

export function findCondition(groupId: string | undefined, conditionId: string | undefined): ConditionPlace | undefined {
  return allConditions().find(place => place.group.id === groupId && place.condition.id === conditionId);
}

export const conditionItems = (condition: LibraryCondition): { item: LibraryItem; type: ContentType }[] =>
  condition.content ? CONTENT_TYPES.flatMap(type => condition.content![type].map(item => ({ item, type }))) : [];

export function allItems(): ItemPlace[] {
  return allConditions().flatMap(place => conditionItems(place.condition).map(({ item, type }) => ({ ...place, item, type })));
}

export function findItem(groupId: string | undefined, conditionId: string | undefined, itemId: string | undefined): ItemPlace | undefined {
  const place = findCondition(groupId, conditionId);
  const found = place && conditionItems(place.condition).find(({ item }) => item.id === itemId);
  return place && found ? { ...place, ...found } : undefined;
}

/** A piece by its "group/condition/item" key, as the front page's lists name them. */
export const itemByKey = (key: string) => {
  const [groupId, conditionId, itemId] = key.split("/");
  return findItem(groupId, conditionId, itemId);
};
export const conditionByKey = (key: string) => {
  const [groupId, conditionId] = key.split("/");
  return findCondition(groupId, conditionId);
};
export const itemKey = (place: { group: { id: string }; condition: { id: string }; item: { id: string } }) => `${place.group.id}/${place.condition.id}/${place.item.id}`;
export const conditionKey = (place: { group: { id: string }; condition: { id: string } }) => `${place.group.id}/${place.condition.id}`;

export const findStory = (id: string | undefined): LibraryStory | undefined => libraryStories.find(story => story.id === id);
export const findLetter = (id: string | undefined): LibraryLetter | undefined => libraryLetters.find(letter => letter.id === id);
export const learnArticle = (item: LibraryItem): LearnArticle | undefined => learnArticles.find(article => article.id === item.learnId);

/** The stories a condition's page lists, in its order. */
export function storiesFor(condition: LibraryCondition): LibraryStory[] {
  return (condition.content?.stories ?? []).map(id => findStory(id)).filter((story): story is LibraryStory => Boolean(story));
}
export const sectionStories = (sectionId: string) => libraryStories.filter(story => story.sectionId === sectionId);
export const groupStories = (groupId: string) => libraryStories.filter(story => story.groupId === groupId);

export const itemMedia = (item: LibraryItem) => findMedia(item.mediaId);

/** Whether a piece is ready: a checked answer (content/my-time-learn.ts) or a film, conversation or guide (content/ischaemic-media.ts). */
export const isReadable = (item: LibraryItem) => Boolean((item.learnId && learnArticle(item)) || itemMedia(item));

export function sectionCounts(section: LibrarySection) {
  const conditions = section.groups.flatMap(group => group.conditions);
  return {
    groups: section.groups.length,
    conditions: conditions.length,
    topics: conditions.reduce((sum, condition) => sum + conditionItems(condition).length, 0),
    stories: sectionStories(section.id).length,
  };
}

/**
 * The pieces the front page's Most read list turns through: the editor's picks first, in their
 * order, then every other piece that has words to read. Nothing here is a reading count.
 */
export function mostReadPool(): ItemPlace[] {
  const picks = MOST_READ.map(itemByKey).filter((place): place is ItemPlace => place !== undefined);
  const picked = new Set(picks.map(itemKey));
  return [...picks, ...allItems().filter(place => isReadable(place.item) && !picked.has(itemKey(place)))];
}

/** `size` pieces of the pool from `offset` on, wrapping round, so the list can turn one place at a time. */
export function mostReadWindow<T>(pool: T[], offset: number, size = 5): T[] {
  if (!pool.length) return [];
  const count = Math.min(size, pool.length);
  const start = ((offset % pool.length) + pool.length) % pool.length;
  return Array.from({ length: count }, (_, at) => pool[(start + at) % pool.length]);
}

// An animation is a video to the reader (review), so it says so.
const KIND_LABEL: Record<ItemKind, string> = { article: "Article", video: "Video", animation: "Video", exercise: "Exercise set", podcast: "Podcast", audio: "Audio", news: "News", research: "Research" };
export const kindLabel = (kind: ItemKind) => KIND_LABEL[kind];

/** "Video · 6 min · neuro-physiotherapist", or without the minutes: "Video · neuro-physiotherapist". A resource elsewhere adds who published it and when. */
export function itemMeta(item: LibraryItem, withKind = true, withMinutes = true): string {
  return [withKind ? kindLabel(item.kind) : null, withMinutes && item.duration ? item.duration : withMinutes && item.minutes ? `${item.minutes} min` : null, item.extra ?? null, item.publisher ?? null, item.date ?? null].filter(Boolean).join(" · ");
}

const NUMBER_WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
/** "Three", for headings; figures past twelve. */
export const numberWord = (count: number) => NUMBER_WORDS[count] ?? String(count);
export const plural = (count: number, one: string, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

/** The chapters a companion story walks through: the timed ones, or all of them when none are timed. */
export function companionChapters(story: LibraryStory) {
  const timed = story.chapters.filter(chapter => chapter.week !== undefined);
  return timed.length ? timed : story.chapters;
}

/** Placement C: the chapter the reader says matches where they are now, or the first one until they say. */
export function companionChapter(story: LibraryStory, chosen: string | undefined) {
  const chapters = companionChapters(story);
  return chapters.find(chapter => chapter.id === chosen) ?? chapters[0];
}
