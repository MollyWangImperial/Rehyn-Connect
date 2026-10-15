import { describe, expect, it } from "vitest";
import { libraryLetters, librarySections, libraryStories, MOST_READ, POPULAR, THREE_MINUTE_ANSWERS } from "@/content/library";
import { learnArticles } from "@/content/my-time-learn";
import {
  allConditions,
  allItems,
  companionChapter,
  conditionByKey,
  conditionItems,
  findCondition,
  findItem,
  findSection,
  findStory,
  isReadable,
  itemByKey,
  itemHref,
  itemKey,
  companionChapters,
  mostReadPool,
  mostReadWindow,
  sectionCounts,
} from "./library";
import { queryWords, searchLibrary } from "./library-search";
import { createLibraryStore, LIBRARY_STORAGE_KEY, readLibraryState } from "./library-store";

describe("the Library's data", () => {
  it("has the seven sections, each with groups and conditions", () => {
    expect(librarySections).toHaveLength(7);
    for (const section of librarySections) {
      expect(section.groups.length).toBeGreaterThan(0);
      expect(section.chips).toHaveLength(3);
      expect(sectionCounts(section).conditions).toBeGreaterThan(0);
    }
  });

  it("keeps everything from Heart & circulation and Lungs & breathing in Heart & lungs, at the old addresses too", () => {
    const merged = findSection("heart-lungs")!;
    expect(merged.title).toBe("Heart & lungs");
    expect(merged.groups.map(group => group.id)).toEqual(["blood-pressure", "heart-attack", "heart-rhythm", "long-term-lung", "sleep-breathing"]);
    expect(sectionCounts(merged).conditions).toBe(7);
    expect(findSection("heart-circulation")).toBe(merged);
    expect(findSection("lungs-breathing")).toBe(merged);
    expect(findSection("heart-circulation-x")).toBeUndefined();
    expect(librarySections.find(section => section.id === "heart-circulation" || section.id === "lungs-breathing")).toBeUndefined();
    expect(findCondition("long-term-lung", "copd")?.section.id).toBe("heart-lungs");
    expect(libraryStories.find(story => story.id === "dev")?.sectionId).toBe("heart-lungs");
    expect(searchLibrary("breathless")[0]?.href).toBe("/long-term-lung/copd");
  });

  it("turns the Most read list through the editor's picks, then the pieces with words to read", () => {
    const pool = mostReadPool();
    expect(pool.slice(0, MOST_READ.length).map(itemKey)).toEqual(MOST_READ);
    expect(pool.length).toBeGreaterThan(5);
    expect(new Set(pool.map(itemKey)).size).toBe(pool.length);
    for (const place of pool.slice(MOST_READ.length)) expect(isReadable(place.item)).toBe(true);
    expect(mostReadWindow([1, 2, 3, 4, 5, 6, 7], 0)).toEqual([1, 2, 3, 4, 5]);
    expect(mostReadWindow([1, 2, 3, 4, 5, 6, 7], 5)).toEqual([6, 7, 1, 2, 3]);
    expect(mostReadWindow([1, 2, 3, 4, 5, 6, 7], 7)).toEqual([1, 2, 3, 4, 5]);
    expect(mostReadWindow([1, 2, 3], 1)).toEqual([2, 3, 1]);
    expect(mostReadWindow([], 3)).toEqual([]);
  });

  it("gives every group and condition an address that names one page", () => {
    const groups = librarySections.flatMap(section => section.groups.map(group => group.id));
    expect(new Set(groups).size).toBe(groups.length);
    // These words are pages of their own under /library.
    expect(groups).not.toContain("stories");
    expect(groups).not.toContain("letters");
    const conditions = allConditions().map(({ group, condition }) => `${group.id}/${condition.id}`);
    expect(new Set(conditions).size).toBe(conditions.length);
    const items = allItems().map(itemHref);
    expect(new Set(items).size).toBe(items.length);
  });

  it("has full pages for ischaemic stroke and Parkinson's disease, one for each story layout", () => {
    const stroke = findCondition("stroke", "ischaemic")!.condition;
    const parkinsons = findCondition("parkinsons", "parkinsons-disease")!.condition;
    expect(stroke.storyLayout).toBe("woven");
    expect(stroke.content?.pause && stroke.content.companion).toBeTruthy();
    expect(stroke.content?.understand.some(item => item.feltToo)).toBe(true);
    expect(parkinsons.storyLayout).toBe("opening");
    expect(parkinsons.content?.opening && parkinsons.content.letterId).toBeTruthy();
    for (const condition of [stroke, parkinsons]) {
      const content = condition.content!;
      expect(condition.summary).toBeTruthy();
      for (const part of [content.understand, content.recover, content.liveWell, content.watch, content.sources, content.askDoctor]) expect(part.length).toBeGreaterThan(0);
    }
  });

  it("points every story, letter, link and list at something that exists", () => {
    const learnIds = learnArticles.map(article => article.id);
    for (const { condition } of allConditions()) {
      const content = condition.content;
      if (!content) continue;
      for (const id of content.stories) expect(findStory(id), id).toBeTruthy();
      for (const { item } of conditionItems(condition)) {
        if (item.learnId) expect(learnIds).toContain(item.learnId);
        for (const id of item.feltToo?.storyIds ?? []) expect(findStory(id), id).toBeTruthy();
      }
      for (const link of content.related) expect(findCondition(link.groupId, link.conditionId), `${link.groupId}/${link.conditionId}`).toBeTruthy();
      if (content.letterId) expect(libraryLetters.map(letter => letter.id)).toContain(content.letterId);
      for (const placement of [content.pause, content.companion, content.opening]) if (placement) expect(findStory(placement.storyId)).toBeTruthy();
    }
    for (const story of libraryStories) expect(findCondition(story.groupId, story.conditionId), story.id).toBeTruthy();
    for (const letter of libraryLetters) expect(findStory(letter.storyId)).toBeTruthy();
    for (const key of [...MOST_READ, ...THREE_MINUTE_ANSWERS]) expect(itemByKey(key), key).toBeTruthy();
    for (const chip of POPULAR) expect(conditionByKey(chip.key), chip.key).toBeTruthy();
  });

  it("links only to real https homepages for trusted sources", () => {
    const urls = allConditions().flatMap(({ condition }) => condition.content?.sources ?? []).map(source => source.url).filter(Boolean) as string[];
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) expect(url).toMatch(/^https:\/\/[a-z.]+\/$/);
  });
});

describe("searching the Library", () => {
  it("keeps the words that carry a question", () => {
    expect(queryWords("Why am I so tired after my stroke?")).toEqual(["tired", "stroke"]);
    expect(queryWords("   ")).toEqual([]);
  });

  it("finds conditions by name, apostrophes and all", () => {
    expect(searchLibrary("parkinson's")[0]).toMatchObject({ kind: "condition", title: "Parkinson's disease", href: "/parkinsons/parkinsons-disease" });
    expect(searchLibrary("Parkinsons")[0].title).toBe("Parkinson's disease");
    expect(searchLibrary("high blood pressure")[0].title).toBe("High blood pressure");
  });

  it("finds pieces by the words people use, not only their titles", () => {
    const hits = searchLibrary("why am I so tired after my stroke?");
    expect(hits[0]).toMatchObject({ kind: "item", href: "/stroke/ischaemic/fatigue" });
    expect(searchLibrary("aphasia").map(hit => hit.href)).toContain("/stroke/ischaemic/words");
  });

  it("returns nothing for an empty question or one it cannot match", () => {
    expect(searchLibrary("")).toEqual([]);
    expect(searchLibrary("zzqx")).toEqual([]);
  });
});

describe("the companion story (placement C)", () => {
  const liWei = findStory("li-wei")!;
  it("starts at the first chapter until the reader says where they are", () => {
    expect(companionChapters(liWei).map(chapter => chapter.id)).toEqual(["day-1", "week-3", "week-9", "month-6", "year-2"]);
    expect(companionChapter(liWei, undefined).id).toBe("day-1");
    expect(companionChapter(liWei, "nope").id).toBe("day-1");
  });

  it("offers the chapter the reader picked", () => {
    expect(companionChapter(liWei, "week-9").id).toBe("week-9");
  });
});

describe("what the reader has done in the Library", () => {
  function disk(initial?: string) {
    const values = new Map<string, string>();
    if (initial !== undefined) values.set(LIBRARY_STORAGE_KEY, initial);
    return { values, getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
  }

  it("reads damaged storage as a fresh start", () => {
    expect(readLibraryState("{not json")).toEqual({ read: [], saved: [], asks: {}, letters: [], last: null, companion: {} });
    expect(readLibraryState(JSON.stringify({ read: ["a", 3], asks: { x: [1, -1, "2"] } })).asks).toEqual({ x: [1] });
  });

  it("keeps pieces read, pages saved, questions ticked and letters opened", () => {
    const storage = disk();
    const store = createLibraryStore(() => storage);
    store.markRead("stroke/ischaemic/fatigue");
    store.markRead("stroke/ischaemic/fatigue");
    store.toggleSaved("stroke/ischaemic");
    store.toggleAsk("stroke/ischaemic", 2);
    store.toggleAsk("stroke/ischaemic", 0);
    store.openLetter("first-year");
    store.visit("parkinsons/parkinsons-disease");
    store.setCompanion("li-wei", "week-9");
    const saved = readLibraryState(storage.values.get(LIBRARY_STORAGE_KEY) ?? null);
    expect(saved).toEqual({ read: ["stroke/ischaemic/fatigue"], saved: ["stroke/ischaemic"], asks: { "stroke/ischaemic": [0, 2] }, letters: ["first-year"], last: "parkinsons/parkinsons-disease", companion: { "li-wei": "week-9" } });
    store.toggleSaved("stroke/ischaemic");
    expect(store.load().saved).toEqual([]);
  });

  it("keeps the Library independent of the removed Alira chat, Journey and exercise pages", () => {
    const sources = import.meta.glob(["../components/library/*.tsx", "../pages/Library.tsx", "./library*.ts", "../content/library.ts"], { query: "?raw", import: "default", eager: true }) as Record<string, string>;
    expect(Object.keys(sources).length).toBeGreaterThan(5);
    for (const [file, text] of Object.entries(sources)) {
      if (file.endsWith(".test.ts")) continue;
      expect(text, file).not.toMatch(/["'`]~\/(alira|journey|assessment|exercise|warm-up)\b/);
      expect(text, file).not.toMatch(/from "@\/lib\/(journey|assessment|exercise|medals|home-|my-time")/);
    }
  });

  it("keeps the front page to its hero, the reference shelf and the most read", () => {
    const sources = import.meta.glob("../components/library/LibraryFront.tsx", { query: "?raw", import: "default", eager: true }) as Record<string, string>;
    const [front] = Object.values(sources);
    expect(front).toBeTruthy();
    for (const gone of ["For you today", "Popular right now", "lib-lede", "lib-counts", "lib-section-count", "LIBRARY_NOTE", "read any condition page aloud", "trusted links"]) expect(front).not.toContain(gone);
    expect(front).toContain("continually adding new conditions, topics and resources");
  });

  it("finds a piece from its address", () => {
    expect(findItem("stroke", "ischaemic", "fatigue")?.item.learnId).toBe("fatigue");
    expect(findItem("stroke", "ischaemic", "nope")).toBeUndefined();
  });
});
