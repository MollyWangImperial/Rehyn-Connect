import { useSyncExternalStore } from "react";
import { LEGAL_VERSION } from "@/content/legal-content";

// What a member has agreed to before using Rehyn: Connect: the Terms of Use, the Privacy Notice and,
// separately, the health information consent. Each is kept with the version agreed to and when, so a
// new version of a document asks again. Kept on this device, like the rest of this preview.

export const CONSENT_KEY = "rehyn.consent.v1";
export const HEALTH_CONSENT_VERSION = "1.0";
/** The health information consent, word for word as approved. */
export const HEALTH_CONSENT_TEXT =
  "I agree that Rehyn Ltd can use any information about my health that I choose to share on Rehyn Connect, such as in my profile, posts, comments and messages. It will be used to show it to the people I share it with and to moderate the community to keep it safe. I can withdraw this at any time in Settings.";

export type Agreement = { version: string; at: number };
export type Consents = {
  terms: Agreement | null;
  privacy: Agreement | null;
  health: Agreement | null;
  /** When the health information consent was last withdrawn, if it was. */
  healthWithdrawnAt: number | null;
};
export const NO_CONSENTS: Consents = { terms: null, privacy: null, health: null, healthWithdrawnAt: null };

function agreement(value: unknown): Agreement | null {
  if (!value || typeof value !== "object") return null;
  const { version, at } = value as Partial<Agreement>;
  return typeof version === "string" && version.length <= 20 && typeof at === "number" && Number.isFinite(at) && at > 0 ? { version, at } : null;
}

export function readConsents(raw: string | null): Consents {
  if (!raw) return NO_CONSENTS;
  try {
    const value = JSON.parse(raw) as Record<string, unknown>;
    const withdrawn = value.healthWithdrawnAt;
    return {
      terms: agreement(value.terms),
      privacy: agreement(value.privacy),
      health: agreement(value.health),
      healthWithdrawnAt: typeof withdrawn === "number" && Number.isFinite(withdrawn) ? withdrawn : null,
    };
  } catch {
    return NO_CONSENTS;
  }
}

/** Each agreement, current or not: an older version of a document counts as not agreed. */
export const agreedTo = (consents: Consents) => ({
  terms: consents.terms?.version === LEGAL_VERSION,
  privacy: consents.privacy?.version === LEGAL_VERSION,
  health: consents.health?.version === HEALTH_CONSENT_VERSION,
});

/** Registered: all three agreed to, in their current versions. */
export function isRegistered(consents: Consents): boolean {
  const agreed = agreedTo(consents);
  return agreed.terms && agreed.privacy && agreed.health;
}

type ConsentStorage = Pick<Storage, "getItem" | "setItem">;

export function createConsentStore(access: () => ConsentStorage | null) {
  let cachedRaw: string | null | undefined;
  let cached = NO_CONSENTS;
  // Kept in memory too, so a browser that won't save still lets the person in for this visit.
  let unsaved: Consents | null = null;
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach(listener => listener());

  const load = (): Consents => {
    if (unsaved) return unsaved;
    try {
      const raw = access()?.getItem(CONSENT_KEY) ?? null;
      if (raw !== cachedRaw) { cached = readConsents(raw); cachedRaw = raw; }
    } catch { /* Keep the last snapshot when storage is unavailable. */ }
    return cached;
  };
  const save = (next: Consents) => {
    try {
      const storage = access();
      if (!storage) throw new Error("no storage");
      storage.setItem(CONSENT_KEY, JSON.stringify(next));
      unsaved = null;
    } catch { unsaved = next; }
    notify();
    return next;
  };

  return {
    load,
    /** Joining: all three at once, each with the version shown and the time. */
    register: (now = Date.now()) => save({ terms: { version: LEGAL_VERSION, at: now }, privacy: { version: LEGAL_VERSION, at: now }, health: { version: HEALTH_CONSENT_VERSION, at: now }, healthWithdrawnAt: load().healthWithdrawnAt }),
    giveHealth: (now = Date.now()) => save({ ...load(), health: { version: HEALTH_CONSENT_VERSION, at: now } }),
    withdrawHealth: (now = Date.now()) => save({ ...load(), health: null, healthWithdrawnAt: now }),
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
  };
}

export const consentStore = createConsentStore(() => (typeof localStorage === "undefined" ? null : localStorage));

function subscribeConsents(listener: () => void) {
  const unsubscribe = consentStore.subscribe(listener);
  const changed = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) listener(); };
  window.addEventListener("storage", changed);
  return () => { unsubscribe(); window.removeEventListener("storage", changed); };
}
export const useConsents = () => useSyncExternalStore(subscribeConsents, consentStore.load, () => NO_CONSENTS);

/** "14 October 2026": when something was agreed to. */
export const agreedOn = (at: number) => new Date(at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
