import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import Community from "@/pages/Community";
import { createCommunityStore, type CommunitySpace } from "@/lib/community-store";
import { OwnPostCard } from "./Feed";
import MessagesDock from "./MessagesDock";

vi.mock("@/components/RecoveryShell", () => ({ default: ({ children }: { children: unknown }) => children }));

// Midday, so quiet time (9 pm to 8 am) never hides the alerts badge while the tests run.
beforeAll(() => { vi.useFakeTimers({ toFake: ["Date"] }); vi.setSystemTime(new Date(2026, 9, 6, 12, 0)); });
afterAll(() => { vi.useRealTimers(); });

const page = (path: string) => renderToStaticMarkup(createElement(Router, { ssrPath: path, children: createElement(Community) })).replace(/ data-loc="[^"]*"/g, "");
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/\s+/g, " ");
/** Whether some opening tag of this kind carries every one of the given attributes, in any order. */
const tagWith = (html: string, name: string, ...attributes: string[]) =>
  (html.match(new RegExp(`<${name}\\b[^>]*>`, "g")) ?? []).some(tag => attributes.every(attribute => tag.includes(attribute)));

describe("My community views", () => {
  it("opens on the feed, with the preview note and the side cards (the tabs are in the shell's top bar)", () => {
    const html = page("/community");
    const text = words(html);
    expect(text).toContain("My community");
    expect(html).not.toContain("cm-tab");
    expect(text).toContain("What's new with you, Zak?");
    for (const name of ["Margaret", "Tomasz", "Priya", "Joan"]) expect(text).toContain(name);
    expect(tagWith(html, "button", 'aria-label="Play Priya&#x27;s voice note, 12 seconds"')).toBe(true);
    expect(text).toContain("Words Sang the whole chorus");
    expect(tagWith(html, "button", 'class="cm-react cm-tone-love "', 'aria-pressed="false"')).toBe(true);
    // Comments are open under every post, with "Write a comment" (no button to open them first), and the Daily question.
    expect(html).not.toContain("cm-comments-toggle");
    // Margaret's post shows its two latest comments, the rest behind "View all".
    expect(text).toContain("David Save me one, Margaret.");
    expect(text).not.toContain("Joan Left hand doing the picking!");
    expect(text).toContain("View all comments");
    expect(text).not.toMatch(/View all \d+ comments/);
    expect((html.match(/placeholder="Write a comment"/g) ?? []).length).toBeGreaterThanOrEqual(4);
    // The Daily question as a live thread: Rehyn's card (with "Daily question" as its small label, no date line), today's
    // question with its key phrase, the first answers, the starters without a hint above them, and the answer box.
    expect(text).toContain("Rehyn Daily question");
    expect(text).not.toContain("From Rehyn");
    expect(html).toMatch(/class="dq-key"><span class="dq-key-text">[^<]+<\/span>/);
    expect((html.match(/class="dq-row /g) ?? []).length).toBe(3);
    expect(text).toContain("3 answered");
    expect(text).toContain("See all answers");
    expect(text).not.toMatch(/See all \d+ answers/);
    expect(text).not.toContain("Add yours in a few words");
    expect(tagWith(html, "div", 'class="dq-chips"', 'role="group"')).toBe(true);
    expect(html).toContain('aria-label="Post your answer"');
    // The right rail: the Sunday circle first ("Live now", nobody named as host), then the lounge; no groups or people cards.
    expect(text).toContain("Live now Sunday circle");
    expect(text).not.toContain("Hosted by Alira");
    expect(text).toContain("Take your seat");
    expect(html.indexOf("Take your seat")).toBeLessThan(html.indexOf("Join the conversation"));
    expect(text).not.toContain("Your groups");
    expect(text).not.toContain("People you may know");
    expect(tagWith(html, "a", 'href="/community?space=start"')).toBe(false);
  });

  it("shows who can see your own posts, and never says only you can see what you share", () => {
    // A post the person made: its line says who sees it (Friends, until the setting is changed).
    const post = createCommunityStore(() => null).addPost({ text: "Walked to the post box today." });
    expect(post).not.toBeNull();
    const card = words(renderToStaticMarkup(createElement(OwnPostCard, { post: post!, name: "Zak" })));
    expect(card).toContain("Walked to the post box today.");
    expect(card).toContain("Seen by Friends");
    const onlyYou = /only you (can|will) see|only visible to you/i;
    expect(card).not.toMatch(onlyYou);
    for (const path of ["/community", "/community?space=lounge", "/community?space=circle", "/community?space=groups", "/community?space=start", "/community?space=settings", "/community?panel=friends"]) {
      expect(words(page(path)), path).not.toMatch(onlyYou);
    }
    expect(words(page("/community?space=settings&section=profile"))).toContain("Who sees my posts by default");
  });

  it("shows the lounge with its people, quick replies and house rules, without the head count, starter, waves, circle promo or poll", () => {
    const html = page("/community?space=lounge");
    const text = words(html);
    expect(text).toContain("The lounge");
    expect(text).toContain("Open to everyone in the community");
    expect(text).not.toContain("people here now");
    expect(text).not.toContain("conversation starter");
    expect(text).toContain("It does get lighter, promise.");
    expect(text).toContain("Tomasz New member");
    expect(tagWith(html, "div", 'role="log"', 'aria-live="off"', 'tabindex="0"')).toBe(true);
    for (const reply of ["Hello everyone", "Welcome, Tomasz", "Well done, Margaret", "Thinking of you all"]) expect(text).toContain(reply);
    expect(tagWith(html, "button", 'aria-label="Send a heart"')).toBe(true);
    expect(tagWith(html, "button", 'aria-label="Heart for Anne&#x27;s message, 5"', 'aria-pressed="false"')).toBe(true);
    expect(text).toContain("Reply to Anne");
    expect(tagWith(html, "button", 'aria-label="Send as a voice note"', 'aria-pressed="false"')).toBe(true);
    expect(text).toContain("House rules 1 Be kind.");
    for (const gone of ["Here right now", "Wave to Tomasz", "Photos are checked before they appear.", "seats taken", "Tea-break poll", "What's in your mug right now?"]) expect(text).not.toContain(gone);
  });

  it("shows the Sunday circle with an empty seat kept for the person, captions and the circles coming up", () => {
    const html = page("/community?space=circle");
    const text = words(html);
    // The stage says Live, and no more: no host line, no eyebrow, no head count.
    expect(html).toMatch(/<p class="cm-stage-live">(?:(?!<\/p>).)*<span>Live<\/span><\/p>/);
    expect(html).not.toContain("cm-stage-event");
    expect(html).not.toContain("cm-stage-sub");
    expect(text).not.toContain("One seat is yours.");
    expect(text).toContain("The teacup goes round. Whoever holds it speaks.");
    expect(text).toContain("Pause the teacup");
    expect(text).toContain("an empty seat, kept for you");
    expect(text).toContain("Alira Host · speaking has the teacup");
    expect(text).toContain("Margaret Up next");
    expect(html).toMatch(/<p class="cm-captions-label">Alira<\/p>/);
    expect(text).not.toContain("Live captions");
    expect(tagWith(html, "button", 'aria-pressed="true"', 'class="cm-stage-button is-on"')).toBe(true);
    for (const control of ["Take your seat", "Next speaker", "Leave quietly"]) expect(text).toContain(control);
    expect(tagWith(html, "a", 'class="cm-stage-button"', 'href="/community"')).toBe(true);
    // Tuesday 6 October: today's get-together is Photo stories, with its topic (no overline) and scene; then a new one every two days.
    expect(text).not.toContain("today's get-together");
    expect(text).not.toContain("Today's topic");
    expect(text).toContain("Photo stories Tell us about a photo you love.");
    expect(tagWith(html, "section", 'class="cm-card cm-stage cm-stage-scene"', 'data-theme="photos"')).toBe(true);
    expect(text).toContain("Said in the circle");
    expect(text).not.toContain("Not kept after the circle ends");
    expect(text).toContain("Coming up THU 8 Film night Thursday 8 October, 4 pm · Bring a film you love");
    // Friday poker night sits in the list too, with its own reminder and the way to its tables.
    expect(text).toContain("FRI 9 Poker night Friday 9 October, 7 pm · Chips only, just for fun. No real money, ever.");
    expect(tagWith(html, "a", 'class="cm-upcoming-link"', 'href="/community?space=poker"')).toBe(true);
    expect(text).toContain("Remind me for Poker night");
    expect(text).toContain("SAT 10 Book club");
    expect(text).not.toContain("A new get-together every two days");
    expect(text).not.toMatch(/stretches|finding words|hand and arm/i);
  });

  it("opens a named group, with its challenge, the group list and suggestions", () => {
    const html = page("/community?space=groups&group=walk");
    const text = words(html);
    expect(html).toMatch(/<h2[^>]*id="cm-group-title"[^>]*>Morning walkers<\/h2>/);
    expect(text).toContain("Short walks, slow walks");
    expect(text).toContain("This week's group challenge One walk a little further than last week");
    expect(tagWith(html, "span", 'role="progressbar"', 'aria-valuetext="5 of 8"')).toBe(true);
    expect(tagWith(html, "a", 'href="/community?space=groups&amp;group=walk"', 'class="cm-group-pick is-on"', 'aria-current="page"')).toBe(true);
    // Your groups come first, then the open group.
    expect(html.indexOf("Your groups")).toBeLessThan(html.indexOf('id="cm-group-title"'));
    expect(text).toContain("Groups you might like");
    expect(text).toContain("Knit and natter");
    expect(text).toContain("+ Invite a friend");
    expect(text).toContain("Joined");
  });

  it("opens Messages at the newest conversation, with the list, the conversation and who it is with", () => {
    const html = page("/community?space=messages");
    const text = words(html);
    expect(html).toMatch(/<h2[^>]*data-view-heading[^>]*>Messages<\/h2>/);
    for (const name of ["Margaret", "David", "Anne", "Garden gang"]) expect(text).toContain(name);
    expect(text).toContain("Voice message · 0:18");
    expect(tagWith(html, "a", 'href="/community?space=messages&amp;chat=margaret"', 'aria-current="page"')).toBe(true);
    expect(text).toContain("Margaret: I promised you one, so I kept the best one for you.");
    for (const tool of ["Thank you", "That's lovely to hear", "Speak soon", "Mute notifications", "Block or report"]) expect(text).toContain(tool);
    // Text size and reading aloud are set in Community settings: the conversation has no toolbar for them.
    for (const gone of ["Larger text", "Read aloud"]) expect(text).not.toContain(gone);
    expect(text).toContain("Member of Rehyn since March 2026");
    expect(tagWith(html, "button", "aria-pressed", 'class="cm-segment"')).toBe(true);
    // The little window stays out of the way on Messages itself.
    expect(html).not.toContain("cm-dock-bar");
  });

  it("opens a named conversation, a group's, and a new one with a friend", () => {
    expect(words(page("/community?space=messages&chat=david"))).toContain("Biscuit and I are doing the canal walk");
    const garden = page("/community?space=messages&chat=garden");
    expect(garden).toMatch(/<h2[^>]*>Garden gang<\/h2>/);
    expect(words(garden)).toContain("Open the group page");
    // Gary is no friend (and is blocked): his name opens nothing, so the newest conversation shows.
    expect(words(page("/community?space=messages&chat=gary"))).toContain("Margaret: I promised you one");
  });

  it("shows the Messages window at the bottom of the other pages as a small pill with the count", () => {
    // The shell (mocked away here) renders the window on every page, with the My community view showing.
    const dock = (space: CommunitySpace | null) => renderToStaticMarkup(createElement(Router, { ssrPath: "/community", children: createElement(MessagesDock, { space }) }));
    const html = dock("lounge");
    expect(tagWith(html, "button", 'class="cm-dock-bar cm-rise"', 'aria-expanded="false"')).toBe(true);
    expect(words(html)).toContain("Messages 2 , 2 unread");
    expect(words(html)).not.toContain("I promised you one");
    // The same pill on a page outside My community.
    expect(words(dock(null))).toContain("Messages 2 , 2 unread");
    expect(dock("start")).not.toContain("cm-dock-bar");
    expect(dock("messages")).not.toContain("cm-dock-bar");
  });

  it("keeps privacy and blocked people under Your profile in Settings (the Friends tab has gone; its drawer stays)", () => {
    const html = page("/community?space=settings&section=profile");
    const text = words(html);
    expect(html).not.toContain("cm-fp-");
    expect(tagWith(html, "div", 'class="cm-set-profile"')).toBe(true);
    // Your profile, then Your privacy, then Blocked, before the other sections.
    expect(text.indexOf("Your profile")).toBeLessThan(text.indexOf("Your privacy"));
    expect(text.indexOf("Your privacy")).toBeLessThan(text.indexOf("Blocked 1 blocked"));
    expect(text.indexOf("Blocked 1 blocked")).toBeLessThan(text.indexOf("What you see"));
    for (const choice of ["Who sees my posts by default", "Who can message me", "Who can ask to be friends", "Show my town", "Show when I'm online"]) expect(text).toContain(choice);
    expect(text).toContain("Friends and my groups");
    expect(tagWith(html, "button", 'role="switch"', 'aria-checked="true"')).toBe(true);
    expect(text).toContain("Gary Blocked 3 days ago");
    expect(tagWith(html, "button", 'class="cm-set-small"', 'aria-expanded="false"')).toBe(true);
    expect(text).toContain("Unblock Gary");
    expect(text).toContain("People you block are never told.");
    // The friends tab's page has gone: its address leads to Your profile, and the drawer still has the requests.
    expect(page("/community?space=friends")).not.toContain("Friend requests 2 waiting");
    expect(words(page("/community?panel=friends"))).toContain("wants to be friends");
  });

  it("falls back to the first group for an unknown group", () => {
    expect(page("/community?space=groups&group=mine-gone")).toMatch(/<h2[^>]*id="cm-group-title"[^>]*>Garden gang<\/h2>/);
  });

  it("starts a group inside a condition, private by default, with a way back to the groups", () => {
    const html = page("/community?space=start");
    const text = words(html);
    expect(tagWith(html, "a", 'class="cm-back"', 'href="/community?space=groups"')).toBe(true);
    expect(html).toMatch(/<h1[^>]*data-view-heading[^>]*>Start a group<\/h1>/);
    // Six conditions, eight themes, and private or public.
    expect((html.match(/type="radio"/g) ?? []).length).toBe(16);
    expect((html.match(/type="checkbox"/g) ?? []).length).toBe(6);
    expect(text).toContain("Default");
    expect(text).toContain("You and 2 friends");
    expect(html).not.toContain("cm-tabs");
    expect(html).not.toContain("cm-tools");
  });
});

describe("the community header and toolbar", () => {
  it("has a slim row of four labelled tools where the green header card was (review comment C04), each connected to its place", () => {
    const html = page("/community");
    const text = words(html);
    expect(html).not.toContain('class="cm-head"');
    expect(text).not.toContain("3 friends · 4 groups");
    expect(tagWith(html, "header", 'class="cm-toolstrip"')).toBe(true);
    for (const label of ["Search", "Alerts", "Friends", "Safety"]) expect(text).toContain(label);
    expect(tagWith(html, "button", 'aria-label="Search people or groups"', 'aria-haspopup="dialog"', 'aria-expanded="false"')).toBe(true);
    // The spaces' tabs and Settings are in the shell's top bar now (recovery-shell.test.ts).
    expect(html).not.toContain('class="cm-tabs"');
    expect(html).not.toContain('aria-label="Community settings"');
    expect(tagWith(html, "button", 'aria-label="Alerts, 4 new"', 'aria-expanded="false"')).toBe(true);
    expect(tagWith(html, "a", 'href="/community?panel=friends"', 'aria-label="Friends and requests, 2 waiting"')).toBe(true);
    expect(tagWith(html, "a", 'href="/community?space=safety"', 'aria-label="Safety"')).toBe(true);
    expect((html.match(/class="cm-tool-badge/g) ?? []).length).toBe(2);
  });

  it("opens the Friends drawer over the view the person is on", () => {
    const html = page("/community?space=lounge");
    expect(tagWith(html, "a", 'href="/community?space=lounge&amp;panel=friends"')).toBe(true);
    expect(html).not.toContain('role="dialog"');
  });
});

describe("the feed with friends, safety and settings", () => {
  it("leaves out Gary's post (he is blocked), covers a hard day and hides posts with hidden words", () => {
    const html = page("/community");
    const text = words(html);
    expect(text).not.toContain("herbal cure");
    expect(tagWith(html, "button", 'aria-label="More options for Margaret&#x27;s post"', 'aria-haspopup="dialog"')).toBe(true);
    expect(tagWith(html, "button", 'aria-label="More options for Tomasz&#x27;s post"')).toBe(true);
    expect(text).toContain("Samuel shares a hard day. Gentle mode keeps it covered");
    expect(text).not.toContain("couldn't manage the stairs");
    expect(text).toContain("Show the post");
    expect(text).not.toContain("Back at the hospital");
    expect(text).toContain("1 post is hidden because it mentions “hospital”");
    // "Change your hidden words" and "Gentle mode settings" open Community settings at What you see.
    expect(tagWith(html, "a", 'href="/community?space=settings&amp;section=see"', 'class="cm-text-button"')).toBe(true);
  });

  it("shows where the person stands with each writer", () => {
    const html = page("/community");
    const text = words(html);
    expect(text).toContain("Friends with Margaret");
    expect(text).toContain("Request sent to Tomasz");
    expect(text).toContain("Add friend (Priya)");
    expect(tagWith(html, "a", 'class="cm-friend is-asking "', 'href="/community?panel=friends"')).toBe(true);
  });
});

describe("the toolbar's pages", () => {
  it("opens Community settings as a page of its own (its button is in the shell's top bar, not the toolbar)", () => {
    const html = page("/community?space=settings");
    expect(html).toMatch(/<h2[^>]*data-view-heading[^>]*>Community settings<\/h2>/);
    expect(tagWith(html, "a", 'href="/community?space=settings"', 'class="cm-tool is-on"')).toBe(false);
    expect(html).toMatch(/<div class="cm-space" data-space="settings">/);
    expect(html).not.toMatch(/data-space="feed"/);
  });

  it("opens Safety as a page, with Gary blocked and a way to Warning signs", () => {
    const html = page("/community?space=safety");
    const text = words(html);
    expect(html).toMatch(/<h2[^>]*data-view-heading[^>]*>Safety<\/h2>/);
    expect(tagWith(html, "a", 'href="/community?space=safety"', 'class="cm-tool is-on"', 'aria-current="page"')).toBe(true);
    expect(text).toContain("Gary");
    expect(text).toContain("Blocked 3 days ago");
    expect(html).toContain('href="/fast-check');
  });

  it("opens the Friends drawer as a dialog over the feed, at For you", () => {
    const html = page("/community?panel=friends");
    const text = words(html);
    expect(tagWith(html, "div", 'role="dialog"', 'aria-modal="true"', 'class="cm-dialog cm-dialog-drawer cm-fr-drawer"')).toBe(true);
    expect(text).toContain("Friends");
    expect(tagWith(html, "button", 'role="tab"', 'aria-selected="true"')).toBe(true);
    expect(text).toContain("Joan");
    expect(text).toContain("Li Wei");
    expect(tagWith(html, "a", 'class="cm-tool is-on"', 'href="/community?panel=friends"')).toBe(true);
    // The feed is still there underneath.
    expect(text).toContain("What's new with you, Zak?");
  });

  it("opens the drawer at another tab, over another view", () => {
    const sent = page("/community?space=lounge&panel=friends&tab=sent");
    expect(words(sent)).toContain("Tomasz");
    expect(words(sent)).toContain("The lounge");
    const blocked = page("/community?space=safety&panel=friends&tab=blocked");
    expect(words(blocked)).toContain("Gary");
    expect(tagWith(blocked, "div", 'role="dialog"')).toBe(true);
  });
});
