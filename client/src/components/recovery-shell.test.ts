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

/** Draws the shell at an address inside the Library's nested route; returns the markup and its links. */
function draw(path: string) {
  const hook = () => [path, () => {}] as [string, (to: string) => void];
  const shell = createElement(RecoveryShell, { active: "Library", dateLabel: "WEDNESDAY, 14 OCTOBER", children: createElement("p", null, "A Library page") });
  const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
    createElement(Router, { hook, searchHook: () => "" }, createElement(Route, { path: "/library", nest: true }, shell)))).replace(/ data-loc="[^"]*"/g, "");
  const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map(match => match[1].replace(/&amp;/g, "&"));
  return { html, hrefs, text: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ") };
}

describe("the shell: tabs at the top right, your panel on the left", () => {
  it("has the Feed, the Library and the community's spaces as tabs, leading to the real pages from the Library too", () => {
    for (const path of ["/library", "/library/stroke/ischaemic"]) {
      const { html, hrefs } = draw(path);
      const tabHrefs = (html.match(/<a\b[^>]*>/g) ?? []).filter(tag => tag.includes('class="site-tab ')).map(tag => tag.match(/href="([^"]*)"/)![1].replace(/&amp;/g, "&"));
      expect(tabHrefs).toEqual([
        "/community", "/library", "/community?space=lounge", "/community?space=circle", "/community?space=groups", "/community?space=messages", "/community?space=friends",
      ]);
      const active = (html.match(/<a\b[^>]*>/g) ?? []).filter(tag => tag.includes('class="site-tab is-active"'));
      expect(active).toHaveLength(1);
      expect(active[0]).toContain('href="/library"');
      expect(active[0]).toContain('aria-current="page"');
      // Nothing in the shell points inside the Library's base by mistake.
      expect(hrefs.filter(href => href.startsWith("/library/community") || href.startsWith("/library/care-team"))).toEqual([]);
    }
  });

  it("shows your profile, friends, saved pages, events, the Library, your groups and the care team on the left", () => {
    const { text, hrefs } = draw("/library/stroke/ischaemic");
    for (const words of ["WEDNESDAY, 14 OCTOBER", "View your profile", "Friends", "Saved", "My events", "The library", "Look up a topic", "Open the library", "Your groups", "Find more groups", "Care team", "Lounge safety", "House rules", "Privacy", "Settings"]) {
      expect(text, words).toContain(words);
    }
    for (const href of ["/community?panel=friends", "/community?space=circle&tab=mine", "/library", "/community?space=groups&group=garden", "/community?space=groups", "/care-team", "/community?space=safety"]) {
      expect(hrefs, href).toContain(href);
    }
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
    ["/community", "?space=friends", "friends"],
    ["/community", "?space=safety", null],
    ["/library", "", "library"],
    ["/library/stroke/ischaemic", "", "library"],
    ["/care-team", "", null],
  ])("%s%s is %s", (pathname, search, tab) => {
    expect(siteTabFor(pathname, search)).toBe(tab);
  });
});
