import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import { conditionGroups, CONDITION_IDS, sampleGames, suggestedGroups } from "@/content/community-samples";
import { blankCommunityMemory, communityHref, communityViewFromQuery, createCommunityStore, gamesAllowed, groupVisibility, parseCommunityMemory, type CommunityMemory } from "@/lib/community-store";
import { findInCommunity } from "./alerts-helpers";
import { replay } from "./games/chess-rules";
import { myGames, myGroups, visibleSubgroupCount, visibleSubgroups } from "./group-model";
import GroupsView from "./Groups";
import StartGroupView from "./StartGroup";

// Groups by condition: private subgroups stay with the people in them, and games are only played
// in private groups. These rules are kept in the model, so every list, search and count obeys them.

vi.mock("@/components/RecoveryShell", () => ({ default: ({ children }: { children: unknown }) => children }));
const given = vi.hoisted(() => ({ memory: null as CommunityMemory | null }));
vi.mock("@/lib/community-store", async importOriginal => {
  const actual = await importOriginal<typeof import("@/lib/community-store")>();
  return { ...actual, useCommunity: () => given.memory ?? actual.blankCommunityMemory() };
});

beforeAll(() => { vi.useFakeTimers({ toFake: ["Date"] }); vi.setSystemTime(new Date(2026, 9, 14, 12, 0)); });
afterAll(() => { vi.useRealTimers(); });
let store = createCommunityStore(() => null);
beforeEach(() => { store = createCommunityStore(() => null); given.memory = null; });

const NOW = new Date(2026, 9, 14, 12, 0).getTime();
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const render = (path: string, element: ReturnType<typeof createElement>) => {
  given.memory = store.load();
  return renderToStaticMarkup(createElement(Router, { ssrPath: path, children: element }));
};
const hiddenGroups = conditionGroups.filter(group => group.visibility === "private");

describe("private groups never show to non-members", () => {
  it("guard: the examples include private groups the person is not in", () => {
    expect(hiddenGroups.map(group => group.name)).toEqual(["Tuesday tea", "Carers' corner"]);
  });

  it("leaves them out of every list, count and suggestion in the model", () => {
    const memory = blankCommunityMemory();
    const ids = hiddenGroups.map(group => group.id as string);
    for (const condition of CONDITION_IDS) {
      const seen = visibleSubgroups(memory, condition);
      expect(seen.map(group => group.id).filter(id => ids.includes(id))).toEqual([]);
      expect(visibleSubgroupCount(memory, condition)).toBe(seen.length);
      // Every group shown is public, or one the person is in.
      expect(seen.every(group => group.visibility === "public" || group.member)).toBe(true);
    }
    expect(myGroups(memory).map(group => group.id).filter(id => ids.includes(id))).toEqual([]);
    expect(suggestedGroups.every(group => group.visibility === "public")).toBe(true);
  });

  it("leaves them out of search, even when searched for by name", () => {
    const found = findInCommunity(blankCommunityMemory(), "Tuesday tea", { space: "feed", group: null });
    expect([...found.groups, ...found.suggested].map(group => group.name)).not.toContain("Tuesday tea");
    expect(findInCommunity(blankCommunityMemory(), "carers", { space: "feed", group: null }).groups).toEqual([]);
  });

  it("can't be joined, even by asking the store directly", () => {
    store.toggleJoined("tuesday-tea" as never);
    expect(store.load().joined).toEqual([]);
    // Saved data can't sneak one in either.
    expect(parseCommunityMemory(JSON.stringify({ joined: ["tuesday-tea", "finding"] })).joined).toEqual(["finding"]);
  });

  it("doesn't show them on the Groups tab, but shows the person's own private groups", () => {
    const html = words(render("/community?space=groups", createElement(GroupsView, { active: false, requested: null })));
    expect(html).toContain("Inside Stroke");
    expect(html).toContain("Garden gang");
    expect(html).toContain("Kitchen singalong");
    expect(html).toContain("Finding words");
    expect(html).not.toContain("Tuesday tea");
    expect(html).toContain("Private groups you are not in never appear here.");
    const parkinsons = words(render("/community?space=groups&cond=parkinsons", createElement(GroupsView, { active: false, requested: null })));
    expect(parkinsons).toContain("Join Parkinson's");
    expect(parkinsons).toContain("Dance for balance");
    expect(parkinsons).not.toContain("Carers' corner");
  });

  it("shows a private group started by the person, and only in its own condition", () => {
    const group = store.startGroup({ name: "Chess and tea", theme: "games", friends: ["anne"], conditionId: "ms" }, NOW);
    const memory = store.load();
    expect(group.visibility).toBe("private");
    expect(visibleSubgroups(memory, "ms").map(item => item.id)).toContain(group.id);
    expect(visibleSubgroups(memory, "stroke").map(item => item.id)).not.toContain(group.id);
    // Starting a group in a condition makes the person a member of it.
    expect(memory.conditions).toEqual(["ms"]);
  });

  it("opens a public group once joined, which joins its condition too", () => {
    store.toggleJoined("dance");
    const memory = store.load();
    expect(memory.conditions).toEqual(["parkinsons"]);
    expect(visibleSubgroups(memory, "parkinsons").find(group => group.id === "dance")?.member).toBe(true);
    expect(myGroups(memory).map(group => group.id)).toContain("dance");
  });
});

describe("games disabled in public groups", () => {
  it("allows games in the person's private groups only", () => {
    const memory = blankCommunityMemory();
    expect(groupVisibility(memory, "garden")).toBe("private");
    expect(gamesAllowed(memory, "garden")).toBe(true);
    expect(gamesAllowed(memory, "walk")).toBe(false);
    expect(gamesAllowed(memory, "cook")).toBe(false);
    // Not a member: no games, private or not.
    expect(gamesAllowed(memory, "tuesday-tea")).toBe(false);
    expect(gamesAllowed(memory, "finding")).toBe(false);
  });

  it("won't start a game in a public group, or with the wrong number of players", () => {
    expect(store.startGame({ groupId: "walk", type: "chess", players: ["david"] }, NOW)).toBeNull();
    expect(store.startGame({ groupId: "garden", type: "chess", players: ["margaret", "joan"] }, NOW)).toBeNull();
    expect(store.startGame({ groupId: "garden", type: "mahjong", players: ["margaret"] }, NOW)).toBeNull();
    // David isn't in Garden gang.
    expect(store.startGame({ groupId: "garden", type: "chess", players: ["david"] }, NOW)).toBeNull();
    const game = store.startGame({ groupId: "garden", type: "ludo", players: ["anne", "joan"] }, NOW);
    expect(game).toMatchObject({ type: "ludo", players: ["anne", "joan"], state: "lobby" });
    store.setGameState(game!.id, "playing");
    expect(store.load().games[0].state).toBe("playing");
  });

  it("switches games off when a started group is made public, and keeps them off", () => {
    const group = store.startGroup({ name: "Board game club", theme: "games", friends: ["anne"] }, NOW);
    expect(group.games).toBe(true);
    store.setGroupVisibility(group.id, "public");
    expect(store.load().started[0]).toMatchObject({ visibility: "public", games: false });
    expect(gamesAllowed(store.load(), group.id)).toBe(false);
    store.setGroupGames(group.id, true);
    expect(store.load().started[0].games).toBe(false);
    expect(store.startGame({ groupId: group.id, type: "chess", players: ["anne"] }, NOW)).toBeNull();
    store.setGroupVisibility(group.id, "private");
    expect(store.startGame({ groupId: group.id, type: "chess", players: ["anne"] }, NOW)).not.toBeNull();
    // A group started public never has games.
    expect(store.startGroup({ name: "Open chat", theme: "chatting", friends: [], visibility: "public", games: true }, NOW).games).toBe(false);
  });

  it("disables Start a game on a public group's page and says why", () => {
    const html = render("/community?space=groups&group=walk", createElement(GroupsView, { active: false, requested: "walk" }));
    expect(html).toMatch(/<button[^>]*class="cm-strip-start "[^>]*aria-disabled="true"/);
    expect(words(html)).toContain("This group is public");
    expect(words(html)).toContain("Games are for private groups");
    const garden = render("/community?space=groups&group=garden", createElement(GroupsView, { active: false, requested: "garden" }));
    expect(garden).toMatch(/<button[^>]*class="cm-strip-start cm-nudge"[^>]*aria-disabled="false"/);
    expect(words(garden)).toContain("Margaret and Joan · chess");
  });

  it("switches the games switch off and greys it out when Start a group is set to Public", () => {
    const html = render("/community?space=start", createElement(StartGroupView, { name: "Zak" }));
    expect(words(html)).toContain("Private Default");
    expect(html).toMatch(/role="switch" aria-checked="true" aria-label="Games in this group"/);
  });
});

describe("old saved groups and games", () => {
  it("keeps groups saved before conditions existed, in Stroke, private unless they were open", () => {
    const memory = parseCommunityMemory(JSON.stringify({
      started: [
        { id: "mine-old", name: "Tea and cake", theme: "chatting", friends: ["joan"], open: true, createdAt: NOW, hello: null },
        { id: "mine-older", name: "Quiet ones", theme: "crafts", friends: [], open: false, createdAt: NOW },
      ],
    }));
    expect(memory.started[0]).toMatchObject({ conditionId: "stroke", visibility: "public", games: false });
    expect(memory.started[1]).toMatchObject({ conditionId: "stroke", visibility: "private", games: true, theme: "crafts" });
    expect(memory.conditions).toEqual([]);
    expect(memory.games).toEqual([]);
  });

  it("keeps a chess game's moves only for the person's own games, and only real move codes", () => {
    const memory = parseCommunityMemory(JSON.stringify({ chess: { "margaret-chess": ["e2e4", "e7e5", "zz99"], "garden-chess": ["e2e4"], other: ["e2e4"] } }));
    expect(memory.chess).toEqual({ "margaret-chess": ["e2e4", "e7e5"] });
  });

  it("writes the address of a game and of a condition", () => {
    expect(communityHref("groups", "garden", { game: "margaret-chess" })).toBe("/community?space=groups&group=garden&game=margaret-chess");
    expect(communityHref("groups", null, { cond: "ms" })).toBe("/community?space=groups&cond=ms");
    expect(communityHref("start", null, { cond: "stroke" })).toBe("/community?space=start&cond=stroke");
    expect(communityViewFromQuery("space=groups&group=garden&game=new")).toMatchObject({ group: "garden", game: "new" });
    expect(communityViewFromQuery("space=groups&cond=nowhere").cond).toBeUndefined();
  });
});

describe("example games", () => {
  it("are all legal chess, and Margaret vs Joan is at White's 14th move", () => {
    for (const game of sampleGames.filter(item => item.type === "chess")) expect(replay(game.moves).history).toHaveLength(game.moves.length);
    expect(sampleGames[0].moves).toHaveLength(27);
  });

  it("leave out a game with someone the person has blocked", () => {
    store.block("joan");
    expect(myGames(store.load()).map(game => game.id)).not.toContain("garden-chess");
    expect(myGames(store.load()).map(game => game.id)).toContain("margaret-chess");
  });
});
