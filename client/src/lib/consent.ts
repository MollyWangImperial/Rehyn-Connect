import { useSyncExternalStore } from "react";
import { LEGAL_VERSION } from "@/content/legal-content";

// What a member has agreed to before using Rehyn: Connect: the Terms of Use, the Privacy Notice and,
// separately, the health information consent; their date of birth (for the under-18 protections);
// and the optional choices on the Data and permissions screen. Each agreement is kept with the
// version agreed to and when, so a new version of a document asks again, and every change is
// written to an audit log with its timestamp (Data and permissions screen, section 3). Kept on
// this device, like the rest of this preview; a real account would hold it on the server.

export const CONSENT_KEY = "rehyn.consent.v1";
export const HEALTH_CONSENT_VERSION = "health_info_v1";
/** The health information consent, word for word as approved. */
export const HEALTH_CONSENT_TEXT =
  "I agree that Rehyn Ltd can use any information about my health that I choose to share on Rehyn Connect, such as in my profile, posts, comments and messages. It will be used to show it to the people I share it with and to moderate the community to keep it safe. I can withdraw this at any time in Settings.";
/** The youngest a member can be. */
export const MIN_AGE = 13;

export type Agreement = { version: string; at: number };
export type AuditEntry = { at: number; what: string; state: string; wording?: string; legal: string };
export type Consents = {
  terms: Agreement | null;
  privacy: Agreement | null;
  health: Agreement | null;
  /** When the health information consent was last withdrawn, if it was. */
  healthWithdrawnAt: number | null;
  /** "2001-05-14", as typed when joining. */
  dateOfBirth: string | null;
  /** Optional choices, off unless switched on. */
  usageStats: boolean;
  updates: boolean;
  activity: boolean;
  /** Every change, newest last (at most 200). */
  audit: AuditEntry[];
};
export const NO_CONSENTS: Consents = { terms: null, privacy: null, health: null, healthWithdrawnAt: null, dateOfBirth: null, usageStats: false, updates: false, activity: true, audit: [] };

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
    const audit = Array.isArray(value.audit) ? value.audit.filter((entry): entry is AuditEntry => !!entry && typeof entry === "object" && typeof (entry as AuditEntry).what === "string" && typeof (entry as AuditEntry).at === "number").slice(-200) : [];
    return {
      terms: agreement(value.terms),
      privacy: agreement(value.privacy),
      health: agreement(value.health),
      healthWithdrawnAt: typeof withdrawn === "number" && Number.isFinite(withdrawn) ? withdrawn : null,
      dateOfBirth: typeof value.dateOfBirth === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value.dateOfBirth) ? value.dateOfBirth : null,
      usageStats: value.usageStats === true,
      updates: value.updates === true,
      activity: value.activity !== false,
      audit,
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

/** Registered: the Terms and the Privacy Notice agreed to, in their current versions, with a date of birth. */
export function isRegistered(consents: Consents): boolean {
  const agreed = agreedTo(consents);
  return agreed.terms && agreed.privacy && consents.dateOfBirth !== null;
}

/** Sharing (posting, commenting, messaging, chats) needs the health information consent (Privacy Notice 5.3). */
export const canShare = (consents: Consents) => isRegistered(consents) && agreedTo(consents).health;

/** Whole years old on a day, from "YYYY-MM-DD"; null when the date doesn't parse. */
export function ageOn(dateOfBirth: string | null, now = new Date()): number | null {
  if (!dateOfBirth) return null;
  const [year, month, day] = dateOfBirth.split("-").map(Number);
  if (!year || !month || !day) return null;
  const born = new Date(year, month - 1, day);
  if (born.getFullYear() !== year || born.getMonth() !== month - 1 || born.getDate() !== day || born > now) return null;
  let age = now.getFullYear() - year;
  if (now.getMonth() < month - 1 || (now.getMonth() === month - 1 && now.getDate() < day)) age -= 1;
  return age;
}

/** Under 18: the extra protections that cannot be switched off (Privacy Notice 11.2). */
export const isUnder18 = (consents: Consents, now = new Date()) => { const age = ageOn(consents.dateOfBirth, now); return age !== null && age < 18; };

type ConsentStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

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
  /** A change with its audit entry: what changed, the new state, the wording's version and the documents' version. */
  const record = (change: Partial<Consents>, what: string, state: string, at: number, wording?: string) => {
    const current = load();
    const entry: AuditEntry = { at, what, state, wording, legal: LEGAL_VERSION };
    return save({ ...current, ...change, audit: [...current.audit, entry].slice(-200) });
  };

  return {
    load,
    /** Joining: the Terms and the Privacy Notice at once, with the date of birth; the health consent is its own record. */
    register: (dateOfBirth: string, health: boolean, now = Date.now()) => {
      record({ terms: { version: LEGAL_VERSION, at: now }, privacy: { version: LEGAL_VERSION, at: now }, dateOfBirth }, "terms_and_privacy", "agreed", now, LEGAL_VERSION);
      return health ? record({ health: { version: HEALTH_CONSENT_VERSION, at: now } }, "health_information", "given", now, HEALTH_CONSENT_VERSION) : load();
    },
    giveHealth: (now = Date.now()) => record({ health: { version: HEALTH_CONSENT_VERSION, at: now } }, "health_information", "given", now, HEALTH_CONSENT_VERSION),
    withdrawHealth: (now = Date.now()) => record({ health: null, healthWithdrawnAt: now }, "health_information", "withdrawn", now, HEALTH_CONSENT_VERSION),
    setUsageStats: (on: boolean, now = Date.now()) => record({ usageStats: on }, "usage_statistics", on ? "on" : "off", now),
    setUpdates: (on: boolean, now = Date.now()) => record({ updates: on }, "updates_about_rehyn", on ? "on" : "off", now),
    setActivity: (on: boolean, now = Date.now()) => record({ activity: on }, "activity_notifications", on ? "on" : "off", now),
    /** Deleting the account: everything here goes too. */
    clear: () => { try { access()?.removeItem(CONSENT_KEY); } catch { /* Gone from memory anyway. */ } unsaved = null; cachedRaw = undefined; cached = NO_CONSENTS; notify(); },
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
