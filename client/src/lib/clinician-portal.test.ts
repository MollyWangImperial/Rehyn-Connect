import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import { scheduleFromWeek, weekFromSchedule } from "@/components/clinicians/portal/Schedule";
import Join from "@/pages/Join";
import { CLINICIANS, alertable, findClinician, freeTimes, works } from "@/content/clinicians";
import { combine, newOwnClinician, profileGaps, registerText } from "./clinician-portal";
import { accept, busyTimes, expire, finish, hasExpired, pickSuggested, request, suggest } from "./consultations";

// Monday 26 October 2026, 9am.
const MONDAY = new Date(2026, 9, 26, 9);
const HOUR = 3_600_000;

describe("joining", () => {
  it("first asks whether you're a patient (or carer) or a clinician", () => {
    const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
      createElement(Router, { hook: () => ["/", () => {}] as [string, (to: string) => void], searchHook: () => "" }, createElement(Join))));
    expect(html).toContain("I&#x27;m a clinician");
    expect(html).toContain("I&#x27;m living with a condition, or caring for someone who is");
  });
});

describe("a clinician's own profile", () => {
  const own = newOwnClinician({ name: "Dr Jo Baker", role: "Stroke physician", type: "doctor", registration: "1234567" });

  it("starts from what they typed, waiting for the registration check, with usual weekday hours", () => {
    expect(own).toMatchObject({ name: "Dr Jo Baker", first: "Jo", initials: "JB", type: "doctor", own: true, verified: false, registration: "1234567", listed: true });
    expect(own.id).toMatch(/^me-[a-z]{8}$/);
    expect(registerText(own)).toBe("GMC registration check pending");
    expect(registerText(CLINICIANS[0])).toBe("Registered with the GMC");
    expect(profileGaps(own)).toEqual(["a few words about you", "the conditions you work with", "how you can help"]);
    // No made-up bookings for a clinician of your own: every weekday hour is free.
    expect(freeTimes(own, MONDAY).filter(time => time.getDay() === 1).map(time => time.getHours())).toEqual([11, 12, 13, 14, 15, 16]);
  });

  it("joins the examples, with changes from the portal applied to whoever they're for", () => {
    const list = combine(CLINICIANS, own, { "amara-osei": { price: 99 }, [own.id]: { price: 70 } });
    expect(list).toHaveLength(CLINICIANS.length + 1);
    expect(list.find(person => person.id === "amara-osei")!.price).toBe(99);
    expect(list.find(person => person.id === own.id)!.price).toBe(70);
    // The examples themselves are untouched.
    expect(findClinician("amara-osei")!.price).toBe(85);
  });
});

describe("hours, time off and urgent alerts", () => {
  const ruth = findClinician("ruth-calloway")!;

  it("turns the usual week into hours and back, days with the same times sharing an entry", () => {
    const week = weekFromSchedule([{ days: [1, 3, 5], from: 9, to: 17 }, { days: [6], from: 10, to: 12 }]);
    expect(week[1]).toEqual({ on: true, from: 9, to: 17 });
    expect(week[2]).toEqual({ on: false, from: 9, to: 17 });
    expect(scheduleFromWeek(week)).toEqual([{ days: [1, 3, 5], from: 9, to: 17 }, { days: [6], from: 10, to: 12 }]);
    expect(scheduleFromWeek({ ...week, 1: { on: true, from: 17, to: 9 } })).toEqual([{ days: [3, 5], from: 9, to: 17 }, { days: [6], from: 10, to: 12 }]);
  });

  it("keeps time off out of their free times, and alerts only as they chose", () => {
    const tuesday = new Date(2026, 9, 27, 10);
    expect(works(ruth, tuesday)).toBe(true);
    const away = { ...ruth, timeOff: [{ from: new Date(2026, 9, 27).getTime(), to: new Date(2026, 9, 28).getTime(), label: "Away" }] };
    expect(works(away, tuesday)).toBe(false);
    expect(freeTimes(away, MONDAY).some(time => time.getDate() === 27)).toBe(false);
    expect(alertable(ruth, MONDAY)).toBe(true);
    expect(alertable({ ...ruth, urgentAlerts: "never" }, MONDAY)).toBe(false);
    // Ruth works mornings: at 11pm she isn't free again today, so "today only" doesn't reach her.
    expect(alertable({ ...ruth, urgentAlerts: "today" }, new Date(2026, 9, 26, 23))).toBe(false);
    expect(alertable({ ...ruth, urgentAlerts: "today" }, new Date(2026, 9, 26, 6))).toBe(true);
  });
});

describe("requests in the portal", () => {
  const amara = findClinician("amara-osei")!;
  const NOW = MONDAY.getTime();

  it("lets the clinician suggest other times, which the patient picks from, with the hold kept meanwhile", () => {
    const sent = request(amara, [NOW + 3 * HOUR], "Driving?", NOW);
    const offered = suggest(sent, [NOW + 50 * HOUR, NOW + 26 * HOUR], NOW + 1);
    expect(offered).toMatchObject({ status: "requested", payment: "held", suggested: [NOW + 26 * HOUR, NOW + 50 * HOUR] });
    expect(pickSuggested(offered, NOW + 4 * HOUR)).toBe(offered);
    expect(pickSuggested(offered, NOW + 26 * HOUR)).toMatchObject({ status: "scheduled", at: NOW + 26 * HOUR });
  });

  it("ends a request whose times have all passed, releasing the hold", () => {
    const sent = request(amara, [NOW + 3 * HOUR], "", NOW);
    expect(hasExpired(sent, NOW + 2 * HOUR)).toBe(false);
    expect(expire(sent, NOW + 3 * HOUR)).toMatchObject({ status: "declined", payment: "released" });
    // A suggested time still to come keeps it open.
    expect(hasExpired(suggest(sent, [NOW + 30 * HOUR]), NOW + 4 * HOUR)).toBe(false);
  });

  it("knows which hours are booked, and keeps the clinician's summary when they finish", () => {
    const booked = accept(request(amara, [NOW + 3 * HOUR], "", NOW), NOW + 3 * HOUR);
    expect(busyTimes([booked], "amara-osei")).toEqual([NOW + 3 * HOUR]);
    expect(freeTimes(amara, MONDAY, 48, [NOW + 3 * HOUR]).some(time => time.getTime() === NOW + 3 * HOUR)).toBe(false);
    const done = finish(booked, [], NOW + 4 * HOUR, { summary: "  Try the pacing plan.  ", followUp: true });
    expect(done).toMatchObject({ status: "done", payment: "paid", summary: "Try the pacing plan.", followUp: true });
    expect(done.steps.at(-1)!.what).toBe("Summary from the clinician");
  });
});
