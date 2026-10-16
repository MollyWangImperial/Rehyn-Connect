import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Route, Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import RecoveryShell from "./RecoveryShell";
import { siteTabFor } from "./SiteTabs";

// Every page has the tabs at the top right and your profile panel down the left. They are drawn
// inside nested routes too (the Library lives under /library), and their links must still lead to
// the real pages: on the live site, a relative link from the Library once opened /library/community.

/**
 * Draws the shell at an address and returns the markup and its links. A Library address is drawn
 * inside the Library's nested route, without the panel, as the Library page does.
 */
function draw(path: string) {
  const hook = () => [path, () => {}] as [string, (to: string) => void];
  const library = path.startsWith("/library");
  const shell = createElement(RecoveryShell, { active: library ? "Library" : "My Community", dateLabel: "WEDNESDAY, 14 OCTOBER", panel: !library, children: createElement("p", null, "A page") });
  const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
    createElement(Router, { hook, searchHook: () => "" }, library ? createElement(Route, { path: "/library", nest: true }, shell) : shell))).replace(/ data-loc="[^"]*"/g, "");
  const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map(match => match[1].replace(/&amp;/g, "&"));
  return { html, hrefs, text: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ") };
}

describe("the shell: tabs at the top right, your panel on the left", () => {
  it("has the Feed, the Library and the community's spaces as tabs, leading to the real pages from the Library too", () => {
    for (const path of ["/library", "/library/stroke/ischaemic"]) {
      const { html, hrefs } = draw(path);
      // (The Poker night tab appears on Fridays only, so it is left out of the comparison.)
      const tabHrefs = (html.match(/<a\b[^>]*>/g) ?? []).filter(tag => tag.includes('class="site-tab ')).map(tag => tag.match(/href="([^"]*)"/)![1].replace(/&amp;/g, "&")).filter(href => href !== "/community?space=poker");
      expect(tabHrefs).toEqual([
        "/community", "/library", "/community?space=lounge", "/community?space=circle", "/community?space=groups", "/community?space=messages",
      ]);
      const active = (html.match(/<a\b[^>]*>/g) ?? []).filter(tag => tag.includes('class="site-tab is-active"'));
      expect(active).toHaveLength(1);
      expect(active[0]).toContain('href="/library"');
      expect(active[0]).toContain('aria-current="page"');
      // Nothing in the shell points inside the Library's base by mistake.
      expect(hrefs.filter(href => href.startsWith("/library/community") || href.startsWith("/library/care-team"))).toEqual([]);
    }
  });

  it("shows your profile, friends, saved pages, events, alerts, the Library and two of your groups on the left; the care team only when switched on", () => {
    const { html, text, hrefs } = draw("/community");
    for (const words of ["View your profile", "Friends", "Saved", "My events", "Alerts", "The library", "Look up a topic", "Open the library", "Your groups", "See all", "Start a group"]) {
      expect(text, words).toContain(words);
    }
    for (const href of ["/community?panel=friends", "/community?space=circle&tab=mine", "/library", "/community?space=groups&group=garden", "/community?space=groups", "/community?space=start"]) {
      expect(hrefs, href).toContain(href);
    }
    // "View your profile" opens Settings → Your profile (a window), not a page.
    expect(html).toMatch(/<button[^>]*class="site-me-link"[^>]*aria-haspopup="dialog"[^>]*>View your profile<\/button>/);
    // Feed review: Alerts is a row under the profile that opens its panel; the footer links are gone.
    expect(html).toMatch(/<button[^>]*class="site-row [^"]*"[^>]*aria-label="Alerts, 4 new"[^>]*aria-haspopup="dialog"[^>]*data-cm-tool="alerts"/);
    expect(html).not.toContain("site-foot");
    for (const gone of ["House rules", "Privacy"]) expect(text).not.toContain(gone);
    // Review comments: no date above the profile, no reading minutes, two groups, no care team for members.
    expect(text).not.toMatch(/OCTOBER|· \d+ min/);
    expect((text.match(/site-group-name/g) ?? []).length).toBe(0);
    expect(hrefs.filter(href => href.startsWith("/community?space=groups&group=")).length).toBe(2);
    expect(hrefs).not.toContain("/care-team");
    expect(text).not.toContain("Lounge safety");
  });

  it("draws no panel on the Library, Groups and Messages, and only Settings in the top bar", () => {
    const { html, text } = draw("/library/stroke/ischaemic");
    expect(html).not.toContain('id="site-panel"');
    expect(html).not.toContain("site-menu");
    expect(text).toContain("Settings");
    for (const gone of ["Use larger text", "Toggle stronger contrast", "'s profile"]) expect(html).not.toContain(gone);
  });

  it("no longer has a Home page, My Time, Journey or Warning signs in it", () => {
    const { text, hrefs } = draw("/library");
    for (const gone of ["Warning signs", "My Time", "Journey"]) expect(text).not.toContain(gone);
    expect(hrefs.some(href => href.startsWith("/fast-check") || href === "/my-time" || href === "/journey" || href === "/")).toBe(false);
  });

  it("opens a live peek of the Sunday circle from its tab, with a seat to take", () => {
    const { html, text } = draw("/library");
    // The tab names today's get-together for a screen reader; the peek shows who's there and a seat.
    const circleTab = (html.match(/<a\b[^>]*>/g) ?? []).find(tag => tag.includes('href="/community?space=circle"') && tag.includes('class="site-tab '));
    const described = circleTab?.match(/aria-describedby="([^"]+)"/)?.[1];
    expect(described).toBeTruthy();
    expect(html).toMatch(new RegExp(`<p class="cm-peek-title" id="${described}">[^<]+</p>`));
    expect(text).toContain("Live · Hosted by Alira");
    const seat = (html.match(/<a\b[^>]*>/g) ?? []).find(tag => tag.includes('class="cm-btn cm-btn-gold cm-btn-wide"'));
    expect(seat).toContain('href="/community?space=circle"');
  });
});

describe("which tab an address belongs to", () => {
  it.each([
    ["/community", "", "feed"],
    ["/community", "?space=lounge", "lounge"],
    ["/community", "?space=circle&tab=mine", "circle"],
    ["/community", "?space=start", "groups"],
    ["/community", "?space=groups&group=garden&game=new", "groups"],
    ["/community", "?space=messages&chat=anne", "messages"],
    ["/community", "?space=friends", null],
    ["/community", "?space=safety", null],
    ["/library", "", "library"],
    ["/library/stroke/ischaemic", "", "library"],
    ["/care-team", "", null],
  ])("%s%s is %s", (pathname, search, tab) => {
    expect(siteTabFor(pathname, search)).toBe(tab);
  });
});
