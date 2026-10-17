import { useCallback, useState } from "react";

// Small things a reader fills in on a Library page (ticks, a practice log, an energy diary), kept in
// this browser only. Nothing here is sent anywhere. A missing or unreadable value falls back quietly.

export function readLocal<T>(key: string, fallback: T): T {
  try {
    if (typeof window === "undefined") return fallback;
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const value = JSON.parse(raw) as unknown;
    if (value === null || typeof value !== typeof fallback || Array.isArray(value) !== Array.isArray(fallback)) return fallback;
    return value as T;
  } catch {
    return fallback;
  }
}

function writeLocal(key: string, value: unknown) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage full or blocked: the page still works for this visit */ }
}

/** Like useState, remembered in this browser under `key`. */
export function useLocal<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => readLocal(key, fallback));
  const update = useCallback((next: T | ((previous: T) => T)) => {
    setValue(previous => {
      const value = typeof next === "function" ? (next as (previous: T) => T)(previous) : next;
      writeLocal(key, value);
      return value;
    });
  }, [key]);
  return [value, update] as const;
}

/** A day as "2026-10-17", in local time. */
export function dayKey(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** The Monday of the week `date` falls in, as a day key. */
export function weekKey(date = new Date()) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  return dayKey(monday);
}

export const longDate = (key: string) => {
  const [year, month, day] = key.split("-").map(Number);
  if (!year || !month || !day) return key;
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

export const prefersStill = () => typeof window !== "undefined" && Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
