import { useSyncExternalStore } from "react";
import { administrativeControlsEnabled } from "./administrative-controls";
import { needsPerson, useLoungeModeration } from "./lounge-moderation";

// The care team's admin space: reviewing held lounge photos and reported posts.
export const CARE_TEAM_PATH = "/care-team";

/**
 * Who sees the care team's space. There are no accounts yet, so this is a switch on this device,
 * not a real role check: it is on in development, and turned on by opening /care-team?admin=on
 * (off with ?admin=off). Real access control needs accounts and a server.
 */
export const CARE_TEAM_KEY = "rehyn.care-team.v1";
const listeners = new Set<() => void>();
const read = () => { try { return localStorage.getItem(CARE_TEAM_KEY) === "on"; } catch { return false; } };

export function careTeamEnabled(): boolean {
  return administrativeControlsEnabled() || read();
}

export function setCareTeamEnabled(on: boolean) {
  try { if (on) localStorage.setItem(CARE_TEAM_KEY, "on"); else localStorage.removeItem(CARE_TEAM_KEY); } catch { /* Stays as it was. */ }
  listeners.forEach(listener => listener());
}

/** `?admin=on` or `?admin=off` in the care team's address flips the switch. */
export function applyCareTeamSwitch(search: string) {
  const asked = new URLSearchParams(search).get("admin");
  if (asked === "on" || asked === "off") setCareTeamEnabled(asked === "on");
}

const subscribe = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
export const useCareTeamEnabled = () => useSyncExternalStore(subscribe, careTeamEnabled, () => false);

/** How many items wait for a person in the care team's queue (the panel's badge). */
export function useCareTeamWaiting(): number {
  return needsPerson(useLoungeModeration()).length;
}
