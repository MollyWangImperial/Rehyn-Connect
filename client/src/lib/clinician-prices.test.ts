import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Route, Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import ClinicianCard from "@/components/clinicians/ClinicianCard";
import Clinicians from "@/pages/Clinicians";
import { CLINICIANS, REHYN_SHARE, clinicianShare, experienceText, findClinician, freeTimes, professionalTitle } from "@/content/clinicians";
import { approvePriceRequest, cancelPriceRequest, declinePriceRequest, getPriceRequests, requestPriceChange } from "./clinician-portal";

// The changes from "modifications for clinicians": a specific professional title and where each clinician is registered,
// "Available now" rather than a time later today, wording that lists rather than suggests, and prices that change only
// once Rehyn's administrator approves.

const html = (element: ReturnType<typeof createElement>) => renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} }, element));
const words = (markup: string) => markup.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/\s+/g, " ");

describe("a clinician's card", () => {
  it("names their specific profession and where they are registered", () => {
    expect(professionalTitle({ level: "Senior", role: "Neurological physiotherapist" })).toBe("Senior neurological physiotherapist");
    expect(professionalTitle({ level: "Consultant", role: "Consultant stroke physician" })).toBe("Consultant stroke physician");
    expect(professionalTitle({ level: "Specialist", role: "Specialist dietitian" })).toBe("Specialist dietitian");
    expect(experienceText({ years: 1 })).toBe("1 year's experience");
    expect(experienceText({ years: 14 })).toBe("14 years' experience");
    const now = new Date(2026, 9, 26, 9);
    const text = words(html(createElement(ClinicianCard, { clinician: findClinician("priya-raman")!, now, preview: true })));
    expect(text).toContain("Senior neurological physiotherapist");
    expect(text).toContain("Registered with the HCPC");
    expect(text).not.toMatch(/\b(Senior|Specialist|Consultant) · \d+ years\b/);
  });

  it("says Available now when the next free time is today, rather than a time", () => {
    const now = new Date(2026, 9, 26, 9);
    const today = CLINICIANS.find(person => freeTimes(person, now, 24 * 14)[0]?.toDateString() === now.toDateString())!;
    const later = CLINICIANS.find(person => { const first = freeTimes(person, now, 24 * 14)[0]; return first && first.toDateString() !== now.toDateString(); })!;
    const textToday = words(html(createElement(ClinicianCard, { clinician: today, now, preview: true })));
    expect(textToday).toContain("Available now");
    expect(textToday).not.toContain("Next free Today");
    expect(words(html(createElement(ClinicianCard, { clinician: later, now, preview: true })))).toContain("Next free");
  });
});

describe("the directory's wording", () => {
  it("lists by condition area rather than suggesting who to see", () => {
    const draw = (path: string) => words(html(createElement(Router, { hook: () => [path, () => {}] as [string, (to: string) => void], searchHook: () => "" },
      createElement(Route, { path: "/clinicians", nest: true }, createElement(Clinicians)))));
    const directory = draw("/clinicians");
    expect(directory).toContain("Browse clinicians by condition area");
    expect(directory).not.toMatch(/Start from your condition|Not sure\?/);
    const byCondition = draw("/clinicians/by-condition");
    expect(byCondition).toContain("Browse by condition area");
    expect(byCondition).not.toMatch(/Often seen by|What would you like help with/);
    expect(byCondition).toMatch(/\d+ clinicians? listed/);
  });
});

describe("prices", () => {
  it("give the clinician their share after Rehyn's", () => {
    expect(REHYN_SHARE).toBe(0.5);
    expect(clinicianShare(50)).toBe(25);
    expect(clinicianShare(75)).toBe(37.5);
  });

  it("change only once the administrator approves a request", () => {
    const amara = findClinician("amara-osei")!;
    const before = amara.price;
    requestPriceChange(amara, before + 10, "Ten more years");
    expect(getPriceRequests().find(item => item.clinicianId === amara.id)).toMatchObject({ from: before, to: before + 10, status: "waiting" });
    expect(findClinician("amara-osei")!.price).toBe(before);
    approvePriceRequest(amara.id);
    expect(findClinician("amara-osei")!.price).toBe(before + 10);
    expect(getPriceRequests().find(item => item.clinicianId === amara.id)?.status).toBe("approved");

    const ruth = findClinician("ruth-calloway")!;
    requestPriceChange(ruth, 200, "Specialist service");
    declinePriceRequest(ruth.id);
    expect(findClinician("ruth-calloway")!.price).toBe(ruth.price);
    expect(getPriceRequests().find(item => item.clinicianId === ruth.id)?.status).toBe("declined");
    cancelPriceRequest(ruth.id);
    expect(getPriceRequests().some(item => item.clinicianId === ruth.id)).toBe(false);
  });
});
