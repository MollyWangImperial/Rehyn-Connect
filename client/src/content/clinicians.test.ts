import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Route, Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import Clinicians from "@/pages/Clinicians";
import { findCondition } from "@/lib/library";
import { CLINICIANS, bookingDays, clinicianGroups, nextFree } from "./clinicians";

/** Draws the Clinicians tab at an address ("/clinicians" is the directory) inside its nested route, as the app does. */
function draw(path: string) {
  const hook = () => [path, () => {}] as [string, (to: string) => void];
  const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
    createElement(Router, { hook, searchHook: () => "" }, createElement(Route, { path: "/clinicians", nest: true }, createElement(Clinicians))))).replace(/ data-loc="[^"]*"/g, "");
  return { html, text: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ") };
}

describe("the clinicians", () => {
  it("each have a unique address and work only with conditions that are in the Library", () => {
    expect(new Set(CLINICIANS.map(person => person.id)).size).toBe(CLINICIANS.length);
    for (const person of CLINICIANS) {
      expect(person.id).toMatch(/^[a-z-]+$/);
      expect(person.modes.length).toBeGreaterThan(0);
      // Video only means online across the UK; in person needs a town.
      expect(person.town === null).toBe(!person.modes.includes("person"));
      for (const [groupId, conditionId] of person.conditions) expect(findCondition(groupId, conditionId), `${person.id}: ${groupId}/${conditionId}`).toBeTruthy();
      expect(clinicianGroups(person).length).toBeGreaterThan(0);
      expect(person.help.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("offer working days only, starting from their first free day", () => {
    const monday = new Date(2026, 9, 26, 9);
    const amara = CLINICIANS.find(person => person.id === "amara-osei")!;
    // Nine days on from Monday 26 October is Wednesday 4 November; then the next two days and the Monday after.
    expect(nextFree(amara, monday).toDateString()).toBe(new Date(2026, 10, 4).toDateString());
    expect(bookingDays(amara, monday).map(day => day.getDate())).toEqual([4, 5, 6, 10]);
    for (const person of CLINICIANS) for (const day of bookingDays(person, monday)) expect([0, 6]).not.toContain(day.getDay());
  });
});

describe("the Clinicians tab", () => {
  it("lists every clinician with the Library's condition areas as filters, and says they are examples", () => {
    const { html, text } = draw("/clinicians");
    expect(text).toContain("Find a clinician");
    expect(text).toContain(`${CLINICIANS.length} clinicians`);
    for (const person of CLINICIANS) expect(html).toContain(`href="/clinicians/${person.id}"`);
    for (const area of ["All areas", "Brain &amp; nervous system", "Kidneys, liver &amp; digestion"]) expect(html).toContain(area);
    expect(text).toContain("If something feels urgent, call 999");
    expect(text).toContain("examples while the directory is being set up");
  });

  it("opens a profile with its conditions leading to the Library and a booking panel", () => {
    const { html, text } = draw("/clinicians/amara-osei");
    expect(text).toContain("Dr Amara Osei");
    expect(text).toContain("Registered with the GMC");
    expect(html).toContain('href="/library/stroke/ischaemic"');
    expect(html).toContain('id="book"');
    expect(text).toContain("Request this appointment");
    expect(text).toContain("Nothing is booked until then");
  });

  it("says so when a clinician isn't found", () => {
    expect(draw("/clinicians/nobody").text).toContain("We couldn&#x27;t find that clinician");
  });
});
