import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Route, Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import Clinicians from "@/pages/Clinicians";
import { clinicianHref } from "@/components/clinicians/SpeakToClinician";
import { findCondition } from "@/lib/library";
import {
  CLINICIANS, PRICE_MAX, PRICE_MIN, SEEN_BY, WEEKLY_SESSIONS, directoryFilters, findClinician, freeSoon, freeTimes, nextFree, nextWeeklySessions, sessionOpen, upcomingSessions,
} from "./clinicians";
import { librarySections } from "./library";

/** Draws the Clinicians tab at an address ("/clinicians" is the directory) inside its nested route, as the app does. */
function draw(address: string) {
  const [path, search = ""] = address.split("?");
  const hook = () => [path, () => {}] as [string, (to: string) => void];
  const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
    createElement(Router, { hook, searchHook: () => search }, createElement(Route, { path: "/clinicians", nest: true }, createElement(Clinicians))))).replace(/ data-loc="[^"]*"/g, "");
  return { html, text: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ") };
}

const RESERVED = ["by-condition", "consultations", "urgent", "portal", "meet"];
// Monday 26 October 2026, 9am.
const MONDAY = new Date(2026, 9, 26, 9);

describe("the clinicians", () => {
  it("each have a unique address, a price, experience and hours, and work only with conditions that are in the Library", () => {
    expect(new Set(CLINICIANS.map(person => person.id)).size).toBe(CLINICIANS.length);
    for (const person of CLINICIANS) {
      expect(person.id).toMatch(/^[a-z-]+$/);
      expect(RESERVED).not.toContain(person.id);
      expect(person.price).toBeGreaterThanOrEqual(PRICE_MIN);
      expect(person.price).toBeLessThanOrEqual(PRICE_MAX);
      expect(person.years).toBeGreaterThan(0);
      expect(person.hours).toBeGreaterThan(0);
      expect(person.schedule.length).toBeGreaterThan(0);
      for (const [groupId, conditionId] of person.conditions) expect(findCondition(groupId, conditionId), `${person.id}: ${groupId}/${conditionId}`).toBeTruthy();
      expect(person.help.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("are free on the hour within their working hours, from an hour after now, for the next 48 hours", () => {
    for (const person of CLINICIANS) {
      for (const time of freeTimes(person, MONDAY)) {
        expect(time.getMinutes()).toBe(0);
        expect(time.getTime()).toBeGreaterThan(MONDAY.getTime() + 3_600_000 - 1);
        expect(time.getTime()).toBeLessThan(MONDAY.getTime() + 48 * 3_600_000);
        expect(person.schedule.some(hours => hours.days.includes(time.getDay()) && time.getHours() >= hours.from && time.getHours() < hours.to)).toBe(true);
      }
      // The same times each time it is asked.
      expect(freeTimes(person, MONDAY).map(time => time.getTime())).toEqual(freeTimes(person, MONDAY).map(time => time.getTime()));
    }
    // Ruth works every morning, so she is free soon; Grace works only Tuesdays and Thursdays.
    expect(freeSoon(findClinician("ruth-calloway")!, MONDAY)).toBe(true);
    expect(nextFree(findClinician("grace-whitlow")!, MONDAY)!.getDay()).toBe(2);
    // Someone is free soon on a Saturday night too, for urgent requests.
    expect(CLINICIANS.some(person => freeSoon(person, new Date(2026, 9, 31, 22)))).toBe(true);
  });

  it("host weekly group sessions that come round each week, with the room open from ten minutes before", () => {
    const next = nextWeeklySessions(MONDAY);
    expect(next).toHaveLength(WEEKLY_SESSIONS.length);
    for (const session of next) {
      expect(findClinician(session.clinicianId)).toBeTruthy();
      expect(session.start).toBeGreaterThanOrEqual(MONDAY.getTime());
      expect(session.start - MONDAY.getTime()).toBeLessThan(7 * 86_400_000);
      expect(`group-${session.id}`).toMatch(/^[a-z0-9-]{6,64}$/);
    }
    const priya = next.find(session => session.clinicianId === "priya-raman")!;
    expect(new Date(priya.start).toDateString()).toBe(MONDAY.toDateString());
    expect(sessionOpen(priya, priya.start - 11 * 60_000)).toBe(false);
    expect(sessionOpen(priya, priya.start - 9 * 60_000)).toBe(true);
    expect(sessionOpen(priya, priya.start + priya.minutes * 60_000)).toBe(false);
    // A session set up in the portal is listed until it ends, soonest first.
    const created = { id: "s-test", clinicianId: "ruth-calloway", title: "Test", about: "", start: MONDAY.getTime() + 60_000, minutes: 30, spaces: 5, weekly: false };
    expect(upcomingSessions([created], MONDAY)[0].id).toBe("s-test");
    expect(upcomingSessions([created], new Date(MONDAY.getTime() + 40 * 60_000)).some(session => session.id === "s-test")).toBe(false);
  });
});

describe("the Clinicians tab", () => {
  it("lists every clinician with a price, the Library's condition areas as filters, group sessions, and says they are examples", () => {
    const { html, text } = draw("/clinicians");
    expect(text).toContain("Find a clinician");
    expect(text).toContain(`${CLINICIANS.length} clinicians`);
    for (const person of CLINICIANS) {
      expect(html).toContain(`href="/clinicians/${person.id}"`);
      expect(text).toContain(`£${person.price} per consultation`);
    }
    for (const area of ["All areas", "Brain &amp; nervous system", "Kidneys, liver &amp; digestion"]) expect(html).toContain(area);
    expect(text).toContain("Weekly group sessions");
    // Each card's short "Book" button still says in full what it does, for screen readers.
    expect(html).toContain(`aria-label="Book a consultation with ${CLINICIANS[0].name}"`);
    expect(text).not.toMatch(/in person/i);
    expect(text).toContain("If something feels urgent, call 999");
    expect(text).toContain("examples while the directory is being set up");
    for (const href of ["/clinicians/by-condition", "/clinicians/consultations", "/clinicians/sessions", "/clinicians/urgent"]) expect(html).toContain(`href="${href}"`);
    // No portal link beside the tabs.
    expect(html).not.toContain('href="/clinicians/portal"');
    // The search band is the main thing, and the urgent route is one button.
    expect(html).toContain('class="cl-band"');
    expect(html).toMatch(/<a (?=[^>]*class="cl-tab")(?=[^>]*aria-current="page")[^>]*href="\/clinicians\/"/);
    expect(text).toContain("Need someone urgently");
    expect(text).not.toContain("Need someone today");
  });

  /** The three parts' panels on the tab's page: [id, hidden]. */
  const panels = (html: string) => [...html.matchAll(/<div id="cl-panel-(\w+)" class="cl-tab-panel"( hidden="")?/g)].map(match => [match[1], !!match[2]]);

  it("shows the chosen tab's part beneath the tabs on the same page, the others there but hidden", () => {
    expect(panels(draw("/clinicians").html)).toEqual([["find", false], ["consultations", true], ["sessions", true]]);
    expect(panels(draw("/clinicians/consultations").html)).toEqual([["find", true], ["consultations", false], ["sessions", true]]);
    expect(panels(draw("/clinicians/sessions").html)).toEqual([["find", true], ["consultations", true], ["sessions", false]]);
    // The heading and tabs stay the same whichever part is showing.
    for (const path of ["/clinicians", "/clinicians/consultations", "/clinicians/sessions"]) {
      const { html } = draw(path);
      expect(html.match(/<h1[^>]*>Clinicians/g)).toHaveLength(1);
      expect((html.match(/class="cl-tab"/g) ?? []).length).toBe(3);
    }
  });

  it("lists every upcoming group session under the Weekly group sessions tab, with how sessions work", () => {
    const { html, text } = draw("/clinicians/sessions");
    expect(text).toContain("Weekly group sessions");
    expect(text).toContain("How sessions work");
    expect((html.match(/class="cl-session"/g) ?? []).length).toBe(nextWeeklySessions(new Date()).length);
    expect(html).toMatch(/<a (?=[^>]*class="cl-tab")(?=[^>]*aria-current="page")[^>]*href="\/clinicians\/sessions"/);
  });

  it("starts from a condition with every Library section and group, each opening the directory narrowed to it", () => {
    const { html, text } = draw("/clinicians/by-condition");
    expect(text).toContain("What would you like help with");
    expect(text).not.toContain("We couldn&#x27;t find that clinician");
    for (const section of librarySections) {
      expect(SEEN_BY[section.id], section.id).toBeTruthy();
      expect(text).toContain(`${section.groups.length} groups`);
      expect(html).toContain(`href="/clinicians/?area=${section.id}"`);
      for (const group of section.groups) expect(html).toContain(`href="/clinicians/?area=${section.id}&amp;group=${group.id}"`);
    }
    expect(html).toContain('href="/clinicians/" class="cl-request">Browse all clinicians');
  });

  it("opens the directory already narrowed by its address, ignoring areas and groups the Library doesn't have", () => {
    expect(directoryFilters("area=heart-lungs&group=heart-rhythm&group=stroke")).toEqual({ area: "heart-lungs", groups: ["heart-rhythm"] });
    expect(directoryFilters("area=nowhere&group=stroke")).toEqual({ area: "all", groups: [] });
    const rhythm = CLINICIANS.filter(person => person.conditions.some(([groupId]) => groupId === "heart-rhythm"));
    const { html, text } = draw("/clinicians?area=heart-lungs&group=heart-rhythm");
    expect(text).toContain(`${rhythm.length} ${rhythm.length === 1 ? "clinician" : "clinicians"}`);
    expect(html).toContain('aria-label="Remove filter Heart &amp; lungs"');
    expect(html).toContain('aria-label="Remove filter Heart rhythm"');
  });

  it("opens a profile with price and experience, conditions leading to the Library, and Book a consultation asking if it's urgent", () => {
    const { html, text } = draw("/clinicians/amara-osei");
    expect(text).toContain("Dr Amara Osei");
    expect(text).toContain("Registered with the GMC");
    expect(text).toContain("Consultant · 14 years");
    expect(text).toContain("1,320 consultation hours");
    expect(text).toContain("£85");
    expect(html).toContain('href="/library/stroke/ischaemic"');
    expect(html).toContain('id="book"');
    expect(text).toContain("Book a consultation");
    expect(text).toContain("Is it urgent?");
    expect(html).toContain('href="/clinicians/urgent"');
    expect(text).toContain("Call 999 now");
    expect(text).not.toMatch(/in person/i);
  });

  it("has an urgent page, My consultations, the clinician portal and the meeting room, none taken for a clinician", () => {
    expect(draw("/clinicians/urgent").text).toContain("Alert clinicians now");
    expect(draw("/clinicians/consultations").text).toContain("No consultations yet");
    expect(draw("/clinicians/portal").text).toContain("Try the portal as");
    for (const page of ["requests", "schedule", "consultations", "sessions", "earnings", "profile"]) expect(draw(`/clinicians/portal/${page}`).text).toContain("Try the portal as");
    expect(draw("/clinicians/meet/abcdefghijklmnop").text).toContain("isn&#x27;t on this device");
    for (const path of ["/clinicians/urgent", "/clinicians/consultations", "/clinicians/portal"]) expect(draw(path).text).not.toContain("We couldn&#x27;t find that clinician");
  });

  it("says so when a clinician isn't found", () => {
    expect(draw("/clinicians/nobody").text).toContain("We couldn&#x27;t find that clinician");
  });
});

describe("Speak to a clinician, on Library pages", () => {
  it("opens the Clinicians tab narrowed to the condition or section being read", () => {
    expect(clinicianHref("/stroke/ischaemic")).toBe("~/clinicians?area=brain-nervous-system&group=stroke");
    expect(clinicianHref("/stroke/ischaemic/fatigue")).toBe("~/clinicians?area=brain-nervous-system&group=stroke");
    expect(clinicianHref("/heart-lungs")).toBe("~/clinicians?area=heart-lungs");
    expect(clinicianHref("/")).toBe("~/clinicians");
    expect(clinicianHref("/stories/li-wei")).toBe("~/clinicians");
  });
});
