import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { SettingsContext } from "@/components/settings-context";
import { LEGAL_VERSION } from "@/content/legal-content";
import Join from "@/pages/Join";
import { RegistrationGate } from "@/App";
import { agreedTo, CONSENT_KEY, createConsentStore, HEALTH_CONSENT_TEXT, HEALTH_CONSENT_VERSION, isRegistered, NO_CONSENTS, readConsents } from "./consent";

function storage(initial?: string) {
  const values = new Map<string, string>();
  if (initial !== undefined) values.set(CONSENT_KEY, initial);
  return { values, getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } };
}
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");

describe("joining needs all three agreements", () => {
  it("is not registered until the Terms, the Privacy Notice and the health information consent are all agreed", () => {
    const disk = storage();
    const store = createConsentStore(() => disk);
    expect(isRegistered(store.load())).toBe(false);
    store.register(1_760_000_000_000);
    const saved = readConsents(disk.values.get(CONSENT_KEY) ?? null);
    expect(saved.terms).toEqual({ version: LEGAL_VERSION, at: 1_760_000_000_000 });
    expect(saved.privacy).toEqual({ version: LEGAL_VERSION, at: 1_760_000_000_000 });
    expect(saved.health).toEqual({ version: HEALTH_CONSENT_VERSION, at: 1_760_000_000_000 });
    expect(isRegistered(store.load())).toBe(true);
  });

  it("asks again after the health information consent is withdrawn, and lets it be given again", () => {
    const disk = storage();
    const store = createConsentStore(() => disk);
    store.register(1000);
    store.withdrawHealth(2000);
    expect(store.load().healthWithdrawnAt).toBe(2000);
    expect(agreedTo(store.load())).toEqual({ terms: true, privacy: true, health: false });
    expect(isRegistered(store.load())).toBe(false);
    store.giveHealth(3000);
    expect(isRegistered(store.load())).toBe(true);
  });

  it("asks again when a document changes version, and reads damaged storage as nothing agreed", () => {
    const old = JSON.stringify({ terms: { version: "0.9", at: 5 }, privacy: { version: LEGAL_VERSION, at: 5 }, health: { version: HEALTH_CONSENT_VERSION, at: 5 } });
    expect(isRegistered(readConsents(old))).toBe(false);
    expect(readConsents("not json")).toEqual(NO_CONSENTS);
    expect(readConsents(JSON.stringify({ terms: { version: LEGAL_VERSION, at: "yesterday" } })).terms).toBeNull();
  });

  it("still lets the person in for this visit when the browser won't save", () => {
    const store = createConsentStore(() => { throw new Error("blocked"); });
    store.register(1000);
    expect(isRegistered(store.load())).toBe(true);
  });
});

describe("the Join page", () => {
  const page = () => words(renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} }, createElement(Router, { ssrPath: "/community" }, createElement(Join)))));

  it("asks for a name and three separate agreements, the health information consent word for word", () => {
    const text = page();
    expect(text).toContain("Join Rehyn: Connect");
    expect(text).toContain("Your first name");
    for (const title of ["Terms of Use", "Privacy Notice", "Health information consent"]) expect(text).toContain(title);
    expect(text).toContain("I have read and agree to the Terms of Use.");
    expect(text).toContain("I have read the Privacy Notice");
    expect(text).toContain(HEALTH_CONSENT_TEXT);
    for (const link of ["Read the Terms of Use", "Read the Privacy Notice", "How we use your information"]) expect(text).toContain(link);
  });

  it("starts with nothing ticked and the Join button waiting", () => {
    const html = renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} }, createElement(Router, { ssrPath: "/community" }, createElement(Join))));
    expect((html.match(/type="checkbox"/g) ?? []).length).toBe(3);
    expect(html).not.toMatch(/type="checkbox"[^>]*checked/);
    expect(html).toMatch(/<button[^>]*type="submit"[^>]*aria-disabled="true"/);
  });

  it("stands in front of every page until the person has joined, but never in front of Warning signs", () => {
    const gate = (path: string) => words(renderToStaticMarkup(createElement(SettingsContext.Provider, { value: () => {} },
      createElement(Router, { ssrPath: path }, createElement(RegistrationGate, null, createElement("p", null, "The page itself"))))));
    // On the server nothing has been agreed yet (the store's server snapshot is empty).
    expect(gate("/community")).toContain("Join Rehyn: Connect");
    expect(gate("/community")).not.toContain("The page itself");
    expect(gate("/fast-check")).toContain("The page itself");
  });
});
