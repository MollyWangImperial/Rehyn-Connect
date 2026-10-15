import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import { conditionGroups, CONDITION_IDS, GAMES, sampleGames, suggestedGroups } from "@/content/community-samples";
import { blankCommunityMemory, communityHref, communityViewFromQuery, createCommunityStore, gamesAllowed, groupVisibility, OPEN_GAMES, parseCommunityMemory, type CommunityMemory } from "@/lib/community-store";
import { findInCommunity } from "./alerts-helpers";
import { replay } from "./games/chess-rules";
import { myGames, myGroups, openGames, visibleSubgroupCount, visibleSubgroups } from "./group-model";
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
/** The markup of the element that starts at `at`, through its own closing tag. */
function element(html: string, at: number, tag = "div"): string {
  if (at < 0) return "";
  const tags = new RegExp(`<${tag}[\\s>]|</${tag}>`, "g");
  tags.lastIndex = at;
  let depth = 0;
  for (let match = tags.exec(html); match; match = tags.exec(html)) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(at, match.index + match[0].length);
  }
  return html.slice(at);
}

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
    // The intro, the privacy note, "Games in your groups" and the poker teaser have gone (C34, C35, C36, C63).
    expect(html).not.toContain("Your own condition comes first");
    expect(html).not.toContain("Private groups only show to the people in them");
    expect(html).not.toContain("Games in your groups");
    expect(html).not.toContain("poker");
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

  it("shows the nine games six at a time in an area that scrolls, Battleships last, with Next below it", () => {
    expect(GAMES.map(game => game.name)).toEqual(["Chess", "Draughts", "Chinese chess", "Go", "Backgammon", "Ludo", "Dominoes", "Mahjong", "Battleships"]);
    const html = render("/community?space=groups&group=garden&game=new", createElement(GroupsView, { active: false, requested: "garden" }));
    const area = element(html, html.lastIndexOf("<div", html.indexOf('class="cm-gs-area"')));
    // The tiles are a labelled group inside the scrolling area, in order.
    expect(area).toContain('role="group" aria-label="Games"');
    expect([...area.matchAll(/data-game="([a-z]+)"/g)].map(match => match[1])).toEqual(GAMES.map(game => game.id));
    expect(area).toMatch(/aria-pressed="true"[^>]*data-autofocus="true"/);
    // A hint that there are more below, and "Next" outside the area, after it.
    expect(words(html)).toContain("Scroll for more games");
    expect(area).not.toContain("cm-gs-next");
    expect(html.indexOf('class="cm-gs-next"')).toBeGreaterThan(html.indexOf(area) + area.length);
    expect(words(html)).toContain("Next: choose who plays Chess");
  });

  it("starts Battleships only in a private group, and opens it once everyone has said yes", () => {
    expect(store.startGame({ groupId: "walk", type: "battleships", players: ["david"] }, NOW)).toBeNull();
    const game = store.startGame({ groupId: "garden", type: "battleships", players: ["margaret"] }, NOW)!;
    const href = communityHref("groups", "garden", { game: game.id });
    // Still waiting for a yes: the group page, not the game.
    expect(render(href, createElement(GroupsView, { active: false, requested: "garden" }))).not.toContain("cm-bs-main");
    store.setGameState(game.id, "playing");
    const page = words(render(href, createElement(GroupsView, { active: false, requested: "garden" })));
    expect(page).toContain("You vs Margaret");
    expect(page).toContain("Place your ships");
    expect(page).toContain("No clock");
    expect(page).toContain("Extra shot after a hit");
    // The group page leads to it, to play.
    const group = render("/community?space=groups&group=garden", createElement(GroupsView, { active: false, requested: "garden" }));
    expect(words(group)).toContain("You vs Margaret · Battleships");
    expect(group).toContain(`href="${href.replace(/&/g, "&amp;")}"`);
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
    // Play now: a game with no group.
    expect(communityHref("groups", null, { game: "new-open" })).toBe("/community?space=groups&game=new-open");
    expect(communityHref("groups", null, { game: "new-open", cond: "ms" })).toBe("/community?space=groups&game=new-open&cond=ms");
    expect(communityViewFromQuery("space=groups&game=new-open")).toMatchObject({ group: null, game: "new-open" });
    expect(communityHref("lounge", null, { game: "new-open" })).toBe("/community?space=lounge");
  });
});

describe("Play now (C61)", () => {
  const groupsPage = () => render("/community?space=groups", createElement(GroupsView, { active: false, requested: null }));

  it("offers it on the Groups page, in the right column, with the same nine games", () => {
    const html = groupsPage();
    expect(words(html)).toContain("Play a game with someone new");
    expect(html).toContain('href="/community?space=groups&amp;game=new-open&amp;cond=stroke"');
    expect(words(html)).toContain("In this preview the other player is played by the computer.");
    // The card sits after "Start a smaller group", in the side column.
    expect(html.indexOf("cm-play-now")).toBeGreaterThan(html.indexOf("cm-start-small"));
    const sheet = render("/community?space=groups&game=new-open", createElement(GroupsView, { active: false, requested: null }));
    const area = element(sheet, sheet.lastIndexOf("<div", sheet.indexOf('class="cm-gs-area"')));
    expect([...area.matchAll(/data-game="([a-z]+)"/g)].map(match => match[1])).toEqual(GAMES.map(game => game.id));
    expect(words(sheet)).toContain("Next: find someone to play Chess");
  });

  it("matches the person straight away with a member who isn't blocked, in no group", () => {
    const game = store.startOpenGame("chess", NOW)!;
    expect(game).toMatchObject({ groupId: OPEN_GAMES, type: "chess", players: ["priya"], state: "playing" });
    const memory = store.load();
    expect(openGames(memory).map(item => item.id)).toEqual([game.id]);
    // Never in a group's games, nor in any group's strip.
    expect(myGames(memory).map(item => item.id)).not.toContain(game.id);
    for (const group of myGroups(memory)) expect(myGames(memory, group.id).map(item => item.id)).not.toContain(game.id);
    expect(render("/community?space=groups&group=garden", createElement(GroupsView, { active: false, requested: "garden" }))).not.toContain(game.id);
    // Its own page says who the other player really is, and goes back to the groups.
    const page = render(`/community?space=groups&game=${game.id}`, createElement(GroupsView, { active: false, requested: null }));
    expect(words(page)).toContain("You vs Priya");
    expect(words(page)).toContain("In this preview the other player is played by the computer.");
    expect(page).toMatch(/<a[^>]*aria-label="Back to groups"[^>]*href="\/community\?space=groups"[^>]*class="cm-chess-back"/);
    // The card on the Groups page leads to it.
    expect(groupsPage()).toContain(`href="/community?space=groups&amp;game=${game.id}"`);
    // Mahjong needs three others; Battleships keeps its ships.
    expect(store.startOpenGame("mahjong", NOW)!.players).toEqual(["priya", "samuel", "david"]);
    const sea = store.startOpenGame("battleships", NOW)!;
    const board = words(render(`/community?space=groups&game=${sea.id}`, createElement(GroupsView, { active: false, requested: null })));
    expect(board).toContain("Play now · Battleships You vs Priya");
    expect(board).toContain("Place your ships");
  });

  it("leaves out anyone blocked, and keeps the private-group rules as they were", () => {
    store.block("priya");
    expect(store.startOpenGame("chess", NOW)!.players).toEqual(["samuel"]);
    store.unblock("priya");
    const game = store.startOpenGame("chess", NOW)!;
    store.block("priya");
    expect(openGames(store.load()).map(item => item.id)).not.toContain(game.id);
    // "open" is not a group: no games can be started in it the group way, and nothing can be said in it.
    expect(gamesAllowed(store.load(), OPEN_GAMES)).toBe(false);
    expect(store.startGame({ groupId: OPEN_GAMES, type: "chess", players: ["samuel"] }, NOW)).toBeNull();
    expect(store.addMessage(OPEN_GAMES, { text: "Hello" }, NOW)).toBeNull();
    expect(store.startGame({ groupId: "walk", type: "chess", players: ["david"] }, NOW)).toBeNull();
    expect(store.startGame({ groupId: "garden", type: "chess", players: ["margaret"] }, NOW)).not.toBeNull();
  });

  it("keeps Play now games that were saved, with their moves, and drops games in groups that aren't there", () => {
    const memory = parseCommunityMemory(JSON.stringify({
      games: [
        { id: "game-open", groupId: "open", type: "chess", players: ["priya"], watch: false, state: "playing", createdAt: NOW },
        { id: "game-lost", groupId: "nowhere", type: "chess", players: ["priya"], state: "playing", createdAt: NOW },
      ],
      chess: { "game-open": ["e2e4"], "game-lost": ["e2e4"] },
    }));
    expect(memory.games.map(game => game.id)).toEqual(["game-open"]);
    expect(memory.chess).toEqual({ "game-open": ["e2e4"] });
    expect(openGames(memory)[0].moves).toEqual(["e2e4"]);
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
