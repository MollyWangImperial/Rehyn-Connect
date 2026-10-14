import { useSyncExternalStore } from "react";

// What the reader has done in the Library, kept on this device: the pieces and story chapters
// opened, the condition pages saved, the questions ticked for the next appointment, the letters
// opened, the condition page visited last (for "Pick up where you left off") and, for each
// companion story, the chapter the reader said is closest to where they are now.

export const LIBRARY_STORAGE_KEY = "rehyn.library.v1";

export type LibraryState = {
  /** "group/condition/item" for pieces, "story:id:chapter" for chapters. */
  read: string[];
  /** "group/condition" of saved pages. */
  saved: string[];
  /** Ticked questions, by "group/condition", as indexes into that page's list. */
  asks: Record<string, number[]>;
  letters: string[];
  last: string | null;
  /** "Where are you now?": a chapter id, by story id. */
  companion: Record<string, string>;
};

const EMPTY: LibraryState = { read: [], saved: [], asks: {}, letters: [], last: null, companion: {} };
const strings = (value: unknown) => (Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string") : []);

export function readLibraryState(raw: string | null): LibraryState {
  if (!raw) return EMPTY;
  try {
    const value = JSON.parse(raw) as Partial<Record<keyof LibraryState, unknown>>;
    const asks: Record<string, number[]> = {};
    if (value.asks && typeof value.asks === "object") {
      for (const [key, list] of Object.entries(value.asks as Record<string, unknown>)) {
        if (Array.isArray(list)) asks[key] = list.filter((entry): entry is number => Number.isInteger(entry) && entry >= 0);
      }
    }
    const companion: Record<string, string> = {};
    if (value.companion && typeof value.companion === "object") {
      for (const [key, chapter] of Object.entries(value.companion as Record<string, unknown>)) {
        if (typeof chapter === "string") companion[key] = chapter;
      }
    }
    return { read: strings(value.read), saved: strings(value.saved), asks, letters: strings(value.letters), last: typeof value.last === "string" ? value.last : null, companion };
  } catch {
    return EMPTY;
  }
}

const add = (list: string[], key: string) => (list.includes(key) ? list : [...list, key]);
const toggle = (list: string[], key: string) => (list.includes(key) ? list.filter(entry => entry !== key) : [...list, key]);

export function createLibraryStore(access: () => Pick<Storage, "getItem" | "setItem"> | null) {
  const listeners = new Set<() => void>();
  let cache: { raw: string | null; state: LibraryState } | null = null;
  const load = (): LibraryState => {
    let raw: string | null = null;
    try { raw = access()?.getItem(LIBRARY_STORAGE_KEY) ?? null; } catch { raw = null; }
    if (!cache || cache.raw !== raw) cache = { raw, state: readLibraryState(raw) };
    return cache.state;
  };
  const save = (change: (state: LibraryState) => LibraryState) => {
    const next = change(load());
    const raw = JSON.stringify(next);
    try { access()?.setItem(LIBRARY_STORAGE_KEY, raw); } catch { /* private window: this visit only */ }
    cache = { raw, state: next };
    listeners.forEach(listener => listener());
    return next;
  };
  return {
    load,
    subscribe: (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
    markRead: (key: string) => { if (!load().read.includes(key)) save(state => ({ ...state, read: add(state.read, key) })); },
    toggleSaved: (key: string) => save(state => ({ ...state, saved: toggle(state.saved, key) })),
    toggleAsk: (key: string, index: number) => save(state => {
      const list = state.asks[key] ?? [];
      return { ...state, asks: { ...state.asks, [key]: list.includes(index) ? list.filter(entry => entry !== index) : [...list, index].sort((a, b) => a - b) } };
    }),
    openLetter: (id: string) => { if (!load().letters.includes(id)) save(state => ({ ...state, letters: add(state.letters, id) })); },
    visit: (key: string) => { if (load().last !== key) save(state => ({ ...state, last: key })); },
    setCompanion: (storyId: string, chapterId: string) => save(state => ({ ...state, companion: { ...state.companion, [storyId]: chapterId } })),
  };
}

export const libraryStore = createLibraryStore(() => (typeof localStorage === "undefined" ? null : localStorage));
export const useLibraryState = () => useSyncExternalStore(libraryStore.subscribe, libraryStore.load, () => EMPTY);
