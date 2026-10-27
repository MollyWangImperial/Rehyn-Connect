// Who is using Rehyn: Connect, and a clinician's own side of it, kept on this device (there are no accounts yet).
//   - The role chosen when joining: a patient (or someone caring for one) or a clinician.
//   - A clinician who signed up here: their profile, created from what they typed when joining, with their registration
//     number waiting for Rehyn to check it. On this device they are listed like anyone else, so they can try booking
//     themselves; nobody else sees them until there are accounts and the check is done.
//   - Changes made in the clinician portal to a clinician's profile, hours, time off and urgent alerts (to their own, or
//     to an example clinician the portal is being tried as).
// content/clinicians.ts reads the resulting list through allClinicians().

import { useSyncExternalStore } from "react";
import { CLINICIANS, REGISTER, setAllClinicians, type Clinician, type ClinicianType } from "@/content/clinicians";
import { consentStore } from "./consent";
import { setPortalClinician } from "./consultations";

export type Role = "patient" | "clinician";

const ROLE_KEY = "rehyn.role.v1";
const OWN_KEY = "rehyn.clinicians.own.v1";
const EDITS_KEY = "rehyn.clinicians.edits.v1";

function readJson<T>(key: string, fallback: T): T {
  try { const raw = window.localStorage.getItem(key); return raw ? (JSON.parse(raw) as T) : fallback; } catch { return fallback; }
}
function writeJson(key: string, value: unknown) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* Kept for this visit only. */ }
}

const listeners = new Set<() => void>();
const browser = typeof window !== "undefined";
let role: Role | null = browser ? readJson<Role | null>(ROLE_KEY, null) : null;
let own: Clinician | null = browser ? readJson<Clinician | null>(OWN_KEY, null) : null;
let edits: Record<string, Partial<Clinician>> = browser ? readJson<Record<string, Partial<Clinician>>>(EDITS_KEY, {}) : {};

/** The examples and this device's own clinician, each with its changes. */
export function combine(base: Clinician[], ownClinician: Clinician | null, changes: Record<string, Partial<Clinician>>): Clinician[] {
  return (ownClinician ? [...base, ownClinician] : base).map(clinician => (changes[clinician.id] ? { ...clinician, ...changes[clinician.id], id: clinician.id } : clinician));
}

let cache: { own: Clinician | null; edits: Record<string, Partial<Clinician>>; list: Clinician[] } | null = null;
function combineCached() {
  if (!cache || cache.own !== own || cache.edits !== edits) cache = { own, edits, list: combine(CLINICIANS, own, edits) };
  return cache.list;
}

function refresh() {
  setAllClinicians(combineCached());
  listeners.forEach(listener => listener());
}
refresh();

if (browser) {
  window.addEventListener("storage", event => {
    if (event.key && ![ROLE_KEY, OWN_KEY, EDITS_KEY].includes(event.key)) return;
    role = readJson<Role | null>(ROLE_KEY, null);
    own = readJson<Clinician | null>(OWN_KEY, null);
    edits = readJson<Record<string, Partial<Clinician>>>(EDITS_KEY, {});
    refresh();
  });
}

const subscribe = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };

/** Everyone, kept up to date with changes from the portal. */
export const useClinicians = () => useSyncExternalStore(subscribe, combineCached, () => CLINICIANS);

export const useRole = () => useSyncExternalStore(subscribe, () => role, () => null);
export const getRole = () => role;
export function setRole(next: Role | null) { role = next; writeJson(ROLE_KEY, next); refresh(); }

export const useOwnClinician = () => useSyncExternalStore(subscribe, () => own, () => null);
export const getOwnClinician = () => own;

/** Change a clinician's profile, hours or alerts, on this device. */
export function updateClinician(id: string, change: Partial<Clinician>) {
  if (own && own.id === id) {
    own = { ...own, ...change, id };
    writeJson(OWN_KEY, own);
  } else {
    edits = { ...edits, [id]: { ...edits[id], ...change } };
    writeJson(EDITS_KEY, edits);
  }
  refresh();
}

const initialsOf = (name: string) => name.replace(/^Dr\.? /i, "").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]!.toUpperCase()).join("") || "?";
const randomId = () => {
  const values = new Uint32Array(8);
  globalThis.crypto.getRandomValues(values);
  return `me-${Array.from(values, value => "abcdefghijklmnopqrstuvwxyz"[value % 26]).join("")}`;
};

export type ClinicianSignUp = { name: string; role: string; type: ClinicianType; registration: string };

/** The profile a clinician starts with when they join: what they typed, and sensible defaults they change in the portal. */
export function newOwnClinician(details: ClinicianSignUp): Clinician {
  const name = details.name.trim();
  return {
    id: randomId(), name, first: name.replace(/^Dr\.? /i, "").split(/\s+/)[0] ?? name, initials: initialsOf(name),
    role: details.role.trim() || "Clinician", type: details.type, level: "Specialist", years: 1, hours: 0, price: 60,
    conditions: [], languages: ["English"], schedule: [{ days: [1, 2, 3, 4, 5], from: 9, to: 17 }],
    help: [], about: "", own: true, registration: details.registration.trim(), verified: false, urgentAlerts: "free48", listed: true,
  };
}

/** Join as a clinician: keep the role and create their profile. */
export function joinAsClinician(details: ClinicianSignUp) {
  own = newOwnClinician(details);
  writeJson(OWN_KEY, own);
  setRole("clinician");
  return own;
}

/**
 * Log out of this device: forget the sign-up (the agreements, the role, a clinician's own profile and which clinician
 * the portal was tried as), so the Join page opens again and someone can join as a patient or a clinician. What was
 * written on this device (posts, consultations, saved places) stays here.
 */
export function logOut() {
  own = null;
  try { window.localStorage.removeItem(OWN_KEY); } catch { /* Gone from memory anyway. */ }
  setPortalClinician(null);
  setRole(null);
  consentStore.clear();
}

/** "Registered with the GMC", or the check still to come. */
export const registerText = (clinician: Clinician) =>
  clinician.own && !clinician.verified ? `${REGISTER[clinician.type]} registration check pending` : `Registered with the ${REGISTER[clinician.type]}`;

/** What a clinician's profile still needs before patients can make sense of it. */
export function profileGaps(clinician: Clinician) {
  return [
    !clinician.about.trim() && "a few words about you",
    clinician.conditions.length === 0 && "the conditions you work with",
    clinician.help.length === 0 && "how you can help",
  ].filter((item): item is string => Boolean(item));
}
