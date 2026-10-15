import { useSyncExternalStore } from "react";

// Larger text and stronger contrast, set under Settings → Display. Saved on this device.

export type DisplayPrefs = { largeText: boolean; strongContrast: boolean };
export const DISPLAY_PREFS_KEY = "rehyn.display.v1";

const OFF: DisplayPrefs = { largeText: false, strongContrast: false };
function load(): DisplayPrefs {
  try {
    const saved = JSON.parse(localStorage.getItem(DISPLAY_PREFS_KEY) ?? "null") as Partial<DisplayPrefs> | null;
    return { largeText: saved?.largeText === true, strongContrast: saved?.strongContrast === true };
  } catch { return OFF; }
}

let prefs: DisplayPrefs = typeof localStorage === "undefined" ? OFF : load();
const listeners = new Set<() => void>();

export function getDisplayPrefs(): DisplayPrefs {
  return prefs;
}

export function setDisplayPrefs(change: Partial<DisplayPrefs>): DisplayPrefs {
  prefs = { ...prefs, ...change };
  try { localStorage.setItem(DISPLAY_PREFS_KEY, JSON.stringify(prefs)); } catch { /* Lasts while the app is open. */ }
  listeners.forEach(listener => listener());
  return prefs;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useDisplayPrefs(): DisplayPrefs {
  return useSyncExternalStore(subscribe, getDisplayPrefs, () => OFF);
}
