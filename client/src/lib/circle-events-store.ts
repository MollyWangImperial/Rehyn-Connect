import { useSyncExternalStore } from "react";
import { PERSON_IDS, type PersonId } from "@/content/community-samples";
import { AUDIENCES, COMMUNITY_TAGS, FORMATS, REPEATS, type Access, type Audience, type CommunityTag, type EventFormat, type Gathering, type Repeats, type Viewer } from "./circle-gatherings";

// What the person has done with Sunday circle events, kept in this browser like the rest of My
// community (community-store.ts): the events they have created, their answers to invitations,
// reminders, a draft, ideas handed to Alira, friends asked to co-host, and, for each member circle
// today, who the circle has been asked about and who left after a vote (so neither can happen again
// that day). Nothing leaves the device.

export const CIRCLE_EVENTS_KEY = "rehyn.circle-events.v1";
export const EVENT_LIMITS = { created: 30, name: 80, detail: 400, idea: 400, suggestions: 20, reminders: 200 } as const;

export type EventAnswer = "going" | "declined" | "asked";
export type EventDraft = {
  /** The event being changed, when it is an edit. */
  editing: string | null;
  name: string;
  detail: string;
  format: EventFormat;
  /** "2026-10-22" and "14:00", as the date and time fields give them. */
  date: string;
  time: string;
  minutes: number;
  repeats: Repeats;
  audience: Audience[];
  communities: CommunityTag[];
  access: Access;
  invited: PersonId[];
  bringFriend: boolean;
  aliraHelps: boolean;
  cameras: boolean;
  keepSaid: boolean;
  seats: number;
};
export type RoomDay = { day: string; asked: string[]; removed: string[] };
export type CircleEventsMemory = {
  created: Gathering[];
  answers: Record<string, EventAnswer>;
  reminders: string[];
  draft: EventDraft | null;
  suggestions: { id: string; text: string; at: number }[];
  coHosts: PersonId[];
  /** Friends invited later ("Invite more") to any event the person hosts. */
  extraInvites: Record<string, PersonId[]>;
  rooms: Record<string, RoomDay>;
};

export const blankCircleEvents = (): CircleEventsMemory => ({ created: [], answers: {}, reminders: [], draft: null, suggestions: [], coHosts: [], extraInvites: {}, rooms: {} });

export const DURATIONS = [30, 45, 60, 90];
export const SEAT_CHOICES = [6, 8, 12, 20, 30, 40];

/* ------------------------------------------------------------- reading it back */

const isObject = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
const text = (value: unknown, limit: number) => (typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, limit) : "");
const oneOf = <T extends string>(list: readonly T[]) => (value: unknown): value is T => typeof value === "string" && (list as readonly string[]).includes(value);
const isPerson = oneOf(PERSON_IDS);
const isViewer = (value: unknown): value is Viewer => value === "you" || isPerson(value);
const isAudience = oneOf(AUDIENCES.map(item => item.id));
const isCommunity = oneOf(COMMUNITY_TAGS.map(item => item.id));
const isFormat = oneOf(FORMATS.map(item => item.id));
const isRepeats = oneOf(REPEATS.map(item => item.id));
const isAccess = oneOf<Access>(["public", "friends", "invite"]);
const isAnswer = oneOf<EventAnswer>(["going", "declined", "asked"]);
const list = <T>(value: unknown, keep: (item: unknown) => item is T): T[] => (Array.isArray(value) ? value.filter(keep).filter((item, index, all) => all.indexOf(item) === index) : []);
const strings = (value: unknown, limit = 64) => list(value, (item): item is string => typeof item === "string" && item.length > 0 && item.length <= limit);
const ID = /^[a-z0-9-]{1,48}$/;
const number = (value: unknown, fallback: number) => (typeof value === "number" && Number.isFinite(value) ? value : fallback);

function cleanGathering(value: unknown): Gathering | null {
  if (!isObject(value) || typeof value.id !== "string" || !ID.test(value.id)) return null;
  const name = text(value.name, EVENT_LIMITS.name);
  const host = isObject(value.host) && value.host.kind === "member" && isViewer(value.host.who) ? { kind: "member" as const, who: value.host.who } : null;
  if (!name || !host || typeof value.start !== "number" || !isFormat(value.format) || !isRepeats(value.repeats) || !isAccess(value.access)) return null;
  const rules = isObject(value.rules) ? { aliraHelps: value.rules.aliraHelps !== false, cameras: value.rules.cameras !== false, keepSaid: value.rules.keepSaid === true } : undefined;
  return {
    id: value.id, name, detail: text(value.detail, EVENT_LIMITS.detail), start: value.start, minutes: Math.min(180, Math.max(15, number(value.minutes, 60))),
    format: value.format, repeats: value.repeats, host, access: value.access, invited: list(value.invited, isViewer), bringFriend: value.bringFriend === true,
    audience: list(value.audience, isAudience), communities: list(value.communities, isCommunity), seats: Math.min(40, Math.max(2, number(value.seats, 12))),
    going: Math.max(0, number(value.going, 0)), faces: list(value.faces, isPerson), rules,
  };
}

function cleanDraft(value: unknown): EventDraft | null {
  if (!isObject(value)) return null;
  const blank = blankDraft(new Date());
  return {
    editing: typeof value.editing === "string" && ID.test(value.editing) ? value.editing : null,
    name: typeof value.name === "string" ? value.name.slice(0, EVENT_LIMITS.name) : "",
    detail: typeof value.detail === "string" ? value.detail.slice(0, EVENT_LIMITS.detail) : "",
    format: isFormat(value.format) ? value.format : blank.format,
    date: typeof value.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value.date) ? value.date : blank.date,
    time: typeof value.time === "string" && /^\d{2}:\d{2}$/.test(value.time) ? value.time : blank.time,
    minutes: DURATIONS.includes(number(value.minutes, 0)) ? number(value.minutes, 45) : blank.minutes,
    repeats: isRepeats(value.repeats) ? value.repeats : blank.repeats,
    audience: list(value.audience, isAudience), communities: list(value.communities, isCommunity),
    access: isAccess(value.access) ? value.access : blank.access, invited: list(value.invited, isPerson),
    bringFriend: value.bringFriend === true, aliraHelps: value.aliraHelps !== false, cameras: value.cameras !== false, keepSaid: value.keepSaid === true,
    seats: SEAT_CHOICES.includes(number(value.seats, 0)) ? number(value.seats, 12) : blank.seats,
  };
}

export function parseCircleEvents(raw: string | null): CircleEventsMemory {
  const blank = blankCircleEvents();
  if (!raw) return blank;
  let value: unknown;
  try { value = JSON.parse(raw); } catch { return blank; }
  if (!isObject(value)) return blank;
  const answers: Record<string, EventAnswer> = {};
  if (isObject(value.answers)) for (const [id, answer] of Object.entries(value.answers)) if (ID.test(id) && isAnswer(answer)) answers[id] = answer;
  const extraInvites: Record<string, PersonId[]> = {};
  if (isObject(value.extraInvites)) for (const [id, people] of Object.entries(value.extraInvites)) if (ID.test(id)) extraInvites[id] = list(people, isPerson);
  const rooms: Record<string, RoomDay> = {};
  if (isObject(value.rooms)) for (const [id, room] of Object.entries(value.rooms)) if (ID.test(id) && isObject(room) && typeof room.day === "string") rooms[id] = { day: room.day, asked: strings(room.asked), removed: strings(room.removed) };
  return {
    created: (Array.isArray(value.created) ? value.created : []).map(cleanGathering).filter((event): event is Gathering => !!event).slice(-EVENT_LIMITS.created),
    answers, reminders: strings(value.reminders).slice(-EVENT_LIMITS.reminders), draft: cleanDraft(value.draft),
    suggestions: (Array.isArray(value.suggestions) ? value.suggestions : [])
      .filter((item): item is { id: string; text: string; at: number } => isObject(item) && typeof item.id === "string" && typeof item.text === "string" && typeof item.at === "number")
      .map(item => ({ id: item.id, text: text(item.text, EVENT_LIMITS.idea), at: item.at })).filter(item => item.text).slice(-EVENT_LIMITS.suggestions),
    coHosts: list(value.coHosts, isPerson), extraInvites, rooms,
  };
}

/* ------------------------------------------------------------------ the form */

const pad = (value: number) => String(value).padStart(2, "0");
export const dateField = (at: Date) => `${at.getFullYear()}-${pad(at.getMonth() + 1)}-${pad(at.getDate())}`;

/** A new form: a week from today, at 2 pm, for everyone, open to the public. */
export function blankDraft(now: Date): EventDraft {
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  return {
    editing: null, name: "", detail: "", format: "teacup", date: dateField(day), time: "14:00", minutes: 45, repeats: "once",
    audience: ["all"], communities: ["everyone"], access: "public", invited: [], bringFriend: false, aliraHelps: true, cameras: true, keepSaid: false, seats: 12,
  };
}

/** The form filled in from an event, to change it. */
export function draftFrom(event: Gathering): EventDraft {
  const start = new Date(event.start);
  return {
    editing: event.id, name: event.name, detail: event.detail, format: event.format, date: dateField(start), time: `${pad(start.getHours())}:${pad(start.getMinutes())}`,
    minutes: DURATIONS.includes(event.minutes) ? event.minutes : 60, repeats: event.repeats, audience: [...event.audience], communities: [...event.communities],
    access: event.access, invited: event.invited.filter(isPerson), bringFriend: event.bringFriend,
    aliraHelps: event.rules?.aliraHelps ?? true, cameras: event.rules?.cameras ?? true, keepSaid: event.rules?.keepSaid ?? false,
    seats: SEAT_CHOICES.includes(event.seats) ? event.seats : 12,
  };
}

/** When the form says it starts (ms), or null if the date or time can't be read. */
export function draftStart(draft: Pick<EventDraft, "date" | "time">): number | null {
  const day = /^(\d{4})-(\d{2})-(\d{2})$/.exec(draft.date);
  const time = /^(\d{2}):(\d{2})$/.exec(draft.time);
  if (!day || !time) return null;
  const at = new Date(Number(day[1]), Number(day[2]) - 1, Number(day[3]), Number(time[1]), Number(time[2]));
  return Number.isNaN(at.getTime()) ? null : at.getTime();
}

export type DraftProblem = "name" | "when" | "past" | "friends" | "seats";

/** What stops a form from being created yet, if anything. */
export function draftProblem(draft: EventDraft, now: number, maxSeats: number): DraftProblem | null {
  if (!draft.name.trim()) return "name";
  const start = draftStart(draft);
  if (start === null) return "when";
  if (start <= now) return "past";
  if (draft.access === "friends" && draft.invited.length === 0) return "friends";
  if (draft.seats > maxSeats) return "seats";
  return null;
}

/** The event a form makes, hosted by the person. Alira always sits in on a public event. */
export function draftToGathering(draft: EventDraft, id: string, going = 0): Gathering | null {
  const start = draftStart(draft);
  const name = text(draft.name, EVENT_LIMITS.name);
  if (start === null || !name) return null;
  return {
    id, name, detail: text(draft.detail, EVENT_LIMITS.detail), start, minutes: draft.minutes, format: draft.format, repeats: draft.repeats,
    host: { kind: "member", who: "you" }, access: draft.access, invited: draft.access === "friends" ? [...draft.invited] : [],
    bringFriend: draft.access === "friends" && draft.bringFriend,
    audience: draft.audience.length ? [...draft.audience] : ["all"], communities: draft.communities.length ? [...draft.communities] : ["everyone"],
    seats: draft.seats, going, faces: [],
    rules: { aliraHelps: draft.access !== "friends" || draft.aliraHelps, cameras: draft.cameras, keepSaid: draft.keepSaid },
  };
}

/* ------------------------------------------------------------------ the store */

export type CircleEventsStorage = Pick<Storage, "getItem" | "setItem">;

export function createCircleEventsStore(access: () => CircleEventsStorage | null) {
  let memory: CircleEventsMemory | null = null;
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach(listener => { try { listener(); } catch { /* one reader cannot stop the others */ } });
  const read = (): CircleEventsMemory => {
    try { return parseCircleEvents(access()?.getItem(CIRCLE_EVENTS_KEY) ?? null); } catch { return blankCircleEvents(); }
  };
  const load = (): CircleEventsMemory => memory ?? (memory = read());
  const change = (edit: (current: CircleEventsMemory) => CircleEventsMemory): CircleEventsMemory => {
    const current = load();
    const next = edit(current);
    if (next === current) return current;
    memory = next;
    try { access()?.setItem(CIRCLE_EVENTS_KEY, JSON.stringify(next)); } catch { /* kept for this visit */ }
    notify();
    return next;
  };
  const room = (current: CircleEventsMemory, id: string, day: string): RoomDay => (current.rooms[id]?.day === day ? current.rooms[id] : { day, asked: [], removed: [] });

  return {
    load,
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    refresh() { memory = read(); notify(); },

    /** Creates the event in the form (or changes the one it edits) and clears the draft. */
    create(draft: EventDraft, now: number): Gathering | null {
      const id = draft.editing ?? `c-${now.toString(36)}`;
      const existing = load().created.find(event => event.id === id);
      // The host is the first one going to a public event; on a friends-only one, nobody has said yes yet.
      const event = draftToGathering(draft, id, existing?.going ?? (draft.access === "friends" ? 0 : 1));
      if (!event) return null;
      change(current => ({ ...current, draft: null, created: [...current.created.filter(item => item.id !== id), event].slice(-EVENT_LIMITS.created) }));
      return event;
    },
    /** Takes an event the person made out of Coming up. */
    cancel: (id: string) => change(current => (current.created.some(event => event.id === id) ? { ...current, created: current.created.filter(event => event.id !== id) } : current)),
    saveDraft: (draft: EventDraft) => change(current => ({ ...current, draft: cleanDraft(draft) })),
    clearDraft: () => change(current => (current.draft ? { ...current, draft: null } : current)),
    /** Going, not this time, or asked to join. `null` takes the answer back. */
    answer: (id: string, answer: EventAnswer | null) => change(current => {
      if (!ID.test(id) || current.answers[id] === answer || (answer === null && !(id in current.answers))) return current;
      const answers = { ...current.answers };
      if (answer) answers[id] = answer; else delete answers[id];
      return { ...current, answers };
    }),
    toggleReminder: (id: string) => change(current => (ID.test(id) ? { ...current, reminders: current.reminders.includes(id) ? current.reminders.filter(item => item !== id) : [...current.reminders, id].slice(-EVENT_LIMITS.reminders) } : current)),
    /** An idea handed to Alira, for her to host. */
    suggest: (idea: string, now: number) => {
      const words = text(idea, EVENT_LIMITS.idea);
      if (!words) return false;
      change(current => ({ ...current, suggestions: [...current.suggestions, { id: `s-${now.toString(36)}`, text: words, at: now }].slice(-EVENT_LIMITS.suggestions) }));
      return true;
    },
    askCoHost: (who: PersonId) => change(current => (isPerson(who) && !current.coHosts.includes(who) ? { ...current, coHosts: [...current.coHosts, who] } : current)),
    invite: (id: string, people: PersonId[]) => change(current => {
      if (!ID.test(id)) return current;
      const now = current.extraInvites[id] ?? [];
      const more = people.filter(who => isPerson(who) && !now.includes(who));
      return more.length ? { ...current, extraInvites: { ...current.extraInvites, [id]: [...now, ...more] } } : current;
    }),
    /** The circle has been asked about someone today: it can't be asked again. */
    askedAbout: (roomId: string, who: string, day: string) => change(current => {
      const today = room(current, roomId, day);
      return today.asked.includes(who) ? current : { ...current, rooms: { ...current.rooms, [roomId]: { ...today, asked: [...today.asked, who] } } };
    }),
    /** Someone left a circle after a vote: they can't rejoin it today. */
    removed: (roomId: string, who: string, day: string) => change(current => {
      const today = room(current, roomId, day);
      return today.removed.includes(who) ? current : { ...current, rooms: { ...current.rooms, [roomId]: { ...today, removed: [...today.removed, who] } } };
    }),
  };
}

export type CircleEventsStore = ReturnType<typeof createCircleEventsStore>;
export const circleEventsStore = createCircleEventsStore(() => (typeof localStorage === "undefined" ? null : localStorage));

/** A member circle's record for today: empty on a new day. */
export const roomToday = (memory: CircleEventsMemory, roomId: string, day: string): RoomDay =>
  (memory.rooms[roomId]?.day === day ? memory.rooms[roomId] : { day, asked: [], removed: [] });

const EMPTY = blankCircleEvents();
let watchers = 0;
const otherTab = (event: StorageEvent) => { if (event.key === CIRCLE_EVENTS_KEY || event.key === null) circleEventsStore.refresh(); };
function subscribeCircleEvents(listener: () => void) {
  const unsubscribe = circleEventsStore.subscribe(listener);
  if (watchers++ === 0 && typeof window !== "undefined") window.addEventListener("storage", otherTab);
  return () => {
    unsubscribe();
    if (--watchers === 0 && typeof window !== "undefined") window.removeEventListener("storage", otherTab);
  };
}
export const useCircleEvents = (): CircleEventsMemory => useSyncExternalStore(subscribeCircleEvents, circleEventsStore.load, () => EMPTY);
