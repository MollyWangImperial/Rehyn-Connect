import { useSyncExternalStore } from "react";
import { MEMBER_IDS, members, PERSON_IDS, type PersonId } from "@/content/community-samples";
import { communityStore } from "@/lib/community-store";
import { classifyScore, DEFAULT_UNSURE_BAND, type PhotoVerdict } from "./lounge-moderation-rules";
import { LOUNGE_AUTHORS, otherAuthors, sampleArt, sampleModeration, type LoungeAuthor } from "./lounge-moderation-samples";

// The lounge's safety record, kept in this browser like the rest of My community: what the person
// has said in the lounge (so it is still there next time), photos held for the care team, blocked
// upload attempts, reports, removed posts, the care team's rules and what they did. In this preview
// the care team's page (/care-team) and the lounge read and change the same record, so an approved
// photo appears in the lounge and a removed post leaves a placeholder there.
//
// Reports are anonymous to the post's author: the record keeps who reported only to count one report
// per member per post, and nothing shown to an author names a reporter.

export type { LoungeAuthor } from "./lounge-moderation-samples";

export const MODERATION_KEY = "rehyn.lounge-moderation.v1";

/** The automatic check's answer. `source: "fallback"` when it couldn't run (the photo is then held). */
export type PhotoCheck = { verdict: PhotoVerdict; score: number | null; labels: string[]; source: "model" | "fallback" };
/** live: in the lounge. pending_review: only the author sees it. declined: the care team took a held photo down. withdrawn: the author cancelled it. */
export type LoungePostStatus = "live" | "pending_review" | "declined" | "withdrawn";
export type LoungePost = {
  id: string;
  author: LoungeAuthor;
  text: string;
  /** The person's own photo (a small JPEG data URL), "art:<name>" for an example, or none. */
  photo: string | null;
  voice: boolean;
  to: PersonId | null;
  createdAt: number;
  status: LoungePostStatus;
  check: PhotoCheck | null;
  /** When a person on the care team approved or declined a held photo. */
  reviewedAt: number | null;
};

export type LoungeReportReason = "unkind" | "medical" | "sexual" | "hate" | "spam" | "other";
export const loungeReportReasons: { id: LoungeReportReason; label: string; short: string }[] = [
  { id: "unkind", label: "Unkind, bullying or harassing", short: "Unkind" },
  { id: "medical", label: "Medical advice or an unsafe suggestion", short: "Medical advice" },
  { id: "sexual", label: "Sexual or explicit", short: "Sexual" },
  { id: "hate", label: "Hateful or discriminatory", short: "Hateful" },
  { id: "spam", label: "Spam or selling something", short: "Spam" },
  { id: "other", label: "Something else", short: "Something else" },
];
const REASON_IDS = loungeReportReasons.map(reason => reason.id);

/** A report on any lounge post. `reporter` is "you" for the person; it is never shown to the author. */
export type LoungeReport = { id: string; postId: string; author: LoungeAuthor; excerpt: string; reporter: string; reason: LoungeReportReason; createdAt: number };
export type Removal = { at: number; by: "reports" | "care-team"; author: LoungeAuthor; excerpt: string };
/** A photo the check blocked. The photo itself is never kept. */
export type BlockedUpload = { id: string; author: LoungeAuthor; at: number; score: number | null; labels: string[]; appealed: boolean };
/** A private note from Alira to the person about one of their posts, or a message from the care team. */
export type AuthorNote = { id: string; kind: "removed" | "declined" | "approved" | "message" | "restored"; postId: string | null; at: number; postAt: number | null; text: string; appealed: boolean };
/** The person asked the care team to look again at a removed post or a blocked photo. */
export type Appeal = { id: string; postId: string | null; blockedId: string | null; at: number; status: "open" | "restored" | "upheld" };
export type LogEntry = { id: string; at: number; text: string };
export type ModerationSettings = { threshold: number; hideForReporter: boolean; tellAuthor: boolean; emailCareTeam: boolean; unsureLow: number; unsureHigh: number };
export type ModerationState = {
  posts: LoungePost[];
  reports: LoungeReport[];
  removals: Record<string, Removal>;
  /** Posts a person on the care team chose to keep up: more reports no longer take them down. */
  kept: string[];
  blocked: BlockedUpload[];
  appeals: Appeal[];
  notes: AuthorNote[];
  /** Lounge members the person blocked from a report who are not in My community (Rob, Kev). */
  blockedAuthors: string[];
  settings: ModerationSettings;
  log: LogEntry[];
  tally: { passed: number; held: number; blocked: number };
};

export const LIMITS = { posts: 60, photos: 12, reports: 200, blocked: 60, notes: 30, log: 120, text: 400, message: 400 } as const;

export function defaultModerationSettings(): ModerationSettings {
  return { threshold: 3, hideForReporter: true, tellAuthor: true, emailCareTeam: true, unsureLow: DEFAULT_UNSURE_BAND.low, unsureHigh: DEFAULT_UNSURE_BAND.high };
}

export function seededModeration(now = Date.now()): ModerationState {
  const sample = sampleModeration(now);
  return { ...sample, kept: [], appeals: [], notes: [], blockedAuthors: [], settings: defaultModerationSettings() };
}

/* ---------------------------------------------------------------- reading */

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null && !Array.isArray(value);
const isText = (value: unknown, max = 2000): value is string => typeof value === "string" && value.length <= max;
const isTime = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value) && value > 0;
const isAuthor = (value: unknown): value is LoungeAuthor => LOUNGE_AUTHORS.includes(value as LoungeAuthor);
const isScore = (value: unknown): value is number | null => value === null || (typeof value === "number" && value >= 0 && value <= 1);
const isLabels = (value: unknown): value is string[] => Array.isArray(value) && value.length <= 12 && value.every(label => isText(label, 80));
const isPhoto = (value: unknown): value is string | null => value === null || (typeof value === "string" && (/^art:[a-z]+$/.test(value) || (value.startsWith("data:image/jpeg;base64,") && value.length <= 600_000)));
const listOf = <T,>(value: unknown, read: (item: unknown) => T | null, max: number): T[] =>
  (Array.isArray(value) ? value.map(read).filter((item): item is T => item !== null).slice(0, max) : []);

function readCheck(value: unknown): PhotoCheck | null {
  if (!isObject(value) || !["pass", "unsure", "block"].includes(value.verdict as string) || !isScore(value.score) || !isLabels(value.labels) || !["model", "fallback"].includes(value.source as string)) return null;
  return { verdict: value.verdict as PhotoVerdict, score: value.score, labels: value.labels, source: value.source as PhotoCheck["source"] };
}
function readPost(value: unknown): LoungePost | null {
  if (!isObject(value) || !isText(value.id, 60) || !isAuthor(value.author) || !isText(value.text, LIMITS.text + 200) || !isPhoto(value.photo) || !isTime(value.createdAt)) return null;
  if (!["live", "pending_review", "declined", "withdrawn"].includes(value.status as string)) return null;
  const to = PERSON_IDS.includes(value.to as PersonId) ? (value.to as PersonId) : null;
  return { id: value.id, author: value.author, text: value.text, photo: value.photo, voice: value.voice === true, to, createdAt: value.createdAt, status: value.status as LoungePostStatus, check: readCheck(value.check), reviewedAt: isTime(value.reviewedAt) ? value.reviewedAt : null };
}
function readReport(value: unknown): LoungeReport | null {
  if (!isObject(value) || !isText(value.id, 60) || !isText(value.postId, 60) || !isAuthor(value.author) || !isText(value.excerpt, 300) || !isText(value.reporter, 60) || !REASON_IDS.includes(value.reason as LoungeReportReason) || !isTime(value.createdAt)) return null;
  return { id: value.id, postId: value.postId, author: value.author, excerpt: value.excerpt, reporter: value.reporter, reason: value.reason as LoungeReportReason, createdAt: value.createdAt };
}
function readBlocked(value: unknown): BlockedUpload | null {
  if (!isObject(value) || !isText(value.id, 60) || !isAuthor(value.author) || !isTime(value.at) || !isScore(value.score) || !isLabels(value.labels)) return null;
  return { id: value.id, author: value.author, at: value.at, score: value.score, labels: value.labels, appealed: value.appealed === true };
}
function readNote(value: unknown): AuthorNote | null {
  if (!isObject(value) || !isText(value.id, 60) || !["removed", "declined", "approved", "message", "restored"].includes(value.kind as string) || !isTime(value.at) || !isText(value.text, LIMITS.message + 400)) return null;
  return { id: value.id, kind: value.kind as AuthorNote["kind"], postId: isText(value.postId, 60) ? value.postId : null, at: value.at, postAt: isTime(value.postAt) ? value.postAt : null, text: value.text, appealed: value.appealed === true };
}
function readAppeal(value: unknown): Appeal | null {
  if (!isObject(value) || !isText(value.id, 60) || !isTime(value.at) || !["open", "restored", "upheld"].includes(value.status as string)) return null;
  return { id: value.id, postId: isText(value.postId, 60) ? value.postId : null, blockedId: isText(value.blockedId, 60) ? value.blockedId : null, at: value.at, status: value.status as Appeal["status"] };
}
function readLog(value: unknown): LogEntry | null {
  return isObject(value) && isText(value.id, 60) && isTime(value.at) && isText(value.text, 600) ? { id: value.id, at: value.at, text: value.text } : null;
}
function readSettings(value: unknown): ModerationSettings {
  const settings = defaultModerationSettings();
  if (!isObject(value)) return settings;
  const threshold = Number(value.threshold);
  if (Number.isInteger(threshold) && threshold >= 1 && threshold <= 10) settings.threshold = threshold;
  for (const key of ["hideForReporter", "tellAuthor", "emailCareTeam"] as const) if (typeof value[key] === "boolean") settings[key] = value[key] as boolean;
  const low = Number(value.unsureLow);
  const high = Number(value.unsureHigh);
  if (Number.isFinite(low) && Number.isFinite(high) && low >= 0.05 && high <= 0.95 && low < high) { settings.unsureLow = low; settings.unsureHigh = high; }
  return settings;
}

/** The saved record, checked item by item. Nothing saved yet (or unreadable) starts from the sample record. */
export function parseModeration(raw: string | null, now = Date.now()): ModerationState {
  if (!raw) return seededModeration(now);
  let saved: unknown;
  try { saved = JSON.parse(raw); } catch { return seededModeration(now); }
  if (!isObject(saved)) return seededModeration(now);
  const removals: Record<string, Removal> = {};
  if (isObject(saved.removals)) {
    for (const [id, value] of Object.entries(saved.removals)) {
      if (isObject(value) && isTime(value.at) && (value.by === "reports" || value.by === "care-team") && isAuthor(value.author) && isText(value.excerpt, 300)) removals[id] = { at: value.at, by: value.by, author: value.author, excerpt: value.excerpt };
    }
  }
  const tally = isObject(saved.tally) ? saved.tally : {};
  const count = (value: unknown) => (typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : 0);
  return {
    posts: listOf(saved.posts, readPost, LIMITS.posts),
    reports: listOf(saved.reports, readReport, LIMITS.reports),
    removals,
    kept: Array.isArray(saved.kept) ? saved.kept.filter((id): id is string => isText(id, 60)) : [],
    blocked: listOf(saved.blocked, readBlocked, LIMITS.blocked),
    appeals: listOf(saved.appeals, readAppeal, 40),
    notes: listOf(saved.notes, readNote, LIMITS.notes),
    blockedAuthors: Array.isArray(saved.blockedAuthors) ? saved.blockedAuthors.filter((id): id is string => id === "rob" || id === "kev") : [],
    settings: readSettings(saved.settings),
    log: listOf(saved.log, readLog, LIMITS.log),
    tally: { passed: count(tally.passed), held: count(tally.held), blocked: count(tally.blocked) },
  };
}

/* ------------------------------------------------------- the pure rules */

let counter = 0;
const newId = (prefix: string, now: number) => `${prefix}-${now.toString(36)}-${(counter++).toString(36)}`;
const addLog = (state: ModerationState, text: string, now: number): LogEntry[] => [{ id: newId("log", now), at: now, text }, ...state.log].slice(0, LIMITS.log);
const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
export const countWord = (count: number) => NUMBER_WORDS[count] ?? String(count);

/** A short quote of a post, for reports and the care team's lists. */
export function excerptOf(text: string, length = 90): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= length ? clean : `${clean.slice(0, length - 1).trimEnd()}…`;
}

/** The band the settings give: pass below it, block above it. */
export const bandOf = (settings: ModerationSettings) => ({ low: settings.unsureLow, high: settings.unsureHigh });
export const classifyWith = (settings: ModerationSettings, score: number) => classifyScore(score, bandOf(settings));

/** The different members who have reported a post. */
export function reportersOf(state: ModerationState, postId: string): string[] {
  return Array.from(new Set(state.reports.filter(report => report.postId === postId).map(report => report.reporter)));
}
export const reportedBy = (state: ModerationState, postId: string, reporter = "you") => state.reports.some(report => report.postId === postId && report.reporter === reporter);

export type ReportDraft = { postId: string; author: LoungeAuthor; text: string; reason: LoungeReportReason };
export type ReportOutcome = "reported" | "removed" | "duplicate" | "gone" | "own";

/**
 * One report per member per post. When the different members reporting a post reach the threshold,
 * the post comes down for everyone, unless a person on the care team has already chosen to keep it up.
 * The author is told privately when it is the person, and "Tell the author" is on.
 */
export function applyReport(state: ModerationState, draft: ReportDraft, reporter: string, now = Date.now()): { state: ModerationState; outcome: ReportOutcome } {
  if (draft.author === reporter) return { state, outcome: "own" };
  if (state.removals[draft.postId]) return { state, outcome: "gone" };
  if (reportedBy(state, draft.postId, reporter)) return { state, outcome: "duplicate" };
  const excerpt = excerptOf(draft.text);
  const report: LoungeReport = { id: newId("lr", now), postId: draft.postId, author: draft.author, excerpt, reporter, reason: draft.reason, createdAt: now };
  let next: ModerationState = { ...state, reports: [report, ...state.reports].slice(0, LIMITS.reports) };
  const count = reportersOf(next, draft.postId).length;
  const threshold = state.settings.threshold;
  if (count >= threshold && !state.kept.includes(draft.postId)) {
    next = removePost(next, draft.postId, draft.author, excerpt, "reports", now);
    next.log = addLog(next, `${authorToken(draft.author)}'s post was removed automatically after ${count} reports. The care team was told.`, now);
    return { state: next, outcome: "removed" };
  }
  next.log = addLog(next, `${authorToken(draft.author)}'s post has ${count} of ${threshold} report${threshold === 1 ? "" : "s"}${state.kept.includes(draft.postId) ? " (kept up by the care team)" : ""}.`, now);
  return { state: next, outcome: "reported" };
}

/** "{you}" in a log line becomes the person's name when it is shown. */
export const authorToken = (author: LoungeAuthor) => (author === "you" ? "{you}" : authorNameOf(author));

function removePost(state: ModerationState, postId: string, author: LoungeAuthor, excerpt: string, by: Removal["by"], now: number, postAt: number | null = null): ModerationState {
  const removals = { ...state.removals, [postId]: { at: now, by, author, excerpt } };
  let notes = state.notes;
  if (author === "you" && state.settings.tellAuthor) {
    const own = state.posts.find(post => post.id === postId);
    notes = [{ id: newId("note", now), kind: "removed" as const, postId, at: now, postAt: own?.createdAt ?? postAt, text: "", appealed: false }, ...notes].slice(0, LIMITS.notes);
  }
  return { ...state, removals, notes, kept: state.kept.filter(id => id !== postId) };
}

/** Where a new photo post goes: straight into the lounge, or held for a person. Blocked photos never get this far. */
export function statusFor(check: PhotoCheck | null): LoungePostStatus {
  return check && check.verdict !== "pass" ? "pending_review" : "live";
}

/** What waits for a person: held photos, oldest first, then the person's requests to look again. */
export type QueueItem = { kind: "held"; post: LoungePost; since: number } | { kind: "appeal"; appeal: Appeal; since: number };
export function needsPerson(state: ModerationState): QueueItem[] {
  const held: QueueItem[] = state.posts.filter(post => post.status === "pending_review").map(post => ({ kind: "held" as const, post, since: post.createdAt }));
  const appeals: QueueItem[] = state.appeals.filter(appeal => appeal.status === "open").map(appeal => ({ kind: "appeal" as const, appeal, since: appeal.at }));
  return [...held, ...appeals].sort((a, b) => a.since - b.since);
}

/** Posts with reports that are still up, most reported first. */
export function reportedPosts(state: ModerationState): { postId: string; author: LoungeAuthor; excerpt: string; reports: LoungeReport[]; count: number; kept: boolean; removed: boolean }[] {
  const ids = Array.from(new Set(state.reports.map(report => report.postId)));
  return ids.map(postId => {
    const reports = state.reports.filter(report => report.postId === postId);
    return { postId, author: reports[0].author, excerpt: reports[0].excerpt, reports, count: reportersOf(state, postId).length, kept: state.kept.includes(postId), removed: !!state.removals[postId] };
  }).sort((a, b) => b.count - a.count || b.reports[0].createdAt - a.reports[0].createdAt);
}

/** "Medical advice ×2", for each reason given. */
export function reasonTally(reports: LoungeReport[]): { reason: LoungeReportReason; label: string; count: number }[] {
  return loungeReportReasons.map(reason => ({ reason: reason.id, label: reason.short, count: reports.filter(report => report.reason === reason.id).length })).filter(item => item.count > 0);
}

export function authorNameOf(author: LoungeAuthor, yourName = "You"): string {
  if (author === "you") return yourName;
  if (author === "rob" || author === "kev") return otherAuthors[author].name;
  return MEMBER_IDS.includes(author) ? members[author].name : "A member";
}

/** The picture for a post: the person's own photo, or an example drawing. */
export function photoOf(post: Pick<LoungePost, "photo">): { src: string; alt: string } | null {
  if (!post.photo) return null;
  if (post.photo.startsWith("art:")) return sampleArt[post.photo.slice(4)] ?? null;
  return { src: post.photo, alt: "Your photo" };
}

/* ------------------------------------------------------------------ store */

type Storage = Pick<globalThis.Storage, "getItem" | "setItem">;

export function createModerationStore(access: () => Storage | null) {
  let state: ModerationState | null = null;
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach(listener => { try { listener(); } catch { /* one reader cannot stop the others */ } });
  const read = (): ModerationState => {
    try { return parseModeration(access()?.getItem(MODERATION_KEY) ?? null); } catch { return seededModeration(); }
  };
  const load = (): ModerationState => state ?? (state = read());
  // Photos take room: if the browser's storage is full, the oldest photos are left out of the saved copy.
  const save = (next: ModerationState) => {
    const storage = access();
    if (!storage) return;
    try { storage.setItem(MODERATION_KEY, JSON.stringify(next)); return; } catch { /* full: try a lighter copy */ }
    let kept = 0;
    const lighter = { ...next, posts: next.posts.map(post => (post.photo?.startsWith("data:") && ++kept > 3 ? { ...post, photo: null } : post)) };
    try { storage.setItem(MODERATION_KEY, JSON.stringify(lighter)); } catch { /* the change lasts for this visit */ }
  };
  const change = (edit: (current: ModerationState) => ModerationState) => {
    const current = load();
    const next = edit(current);
    if (next === current) return current;
    state = next;
    save(next);
    notify();
    return next;
  };
  const post = (id: string) => load().posts.find(item => item.id === id) ?? null;
  const editPost = (current: ModerationState, id: string, edit: (post: LoungePost) => LoungePost) => ({ ...current, posts: current.posts.map(item => (item.id === id ? edit(item) : item)) });
  const note = (current: ModerationState, kind: AuthorNote["kind"], postId: string | null, postAt: number | null, text: string, now: number): AuthorNote[] =>
    [{ id: newId("note", now), kind, postId, at: now, postAt, text, appealed: false }, ...current.notes].slice(0, LIMITS.notes);

  /** Something the person said in the lounge: words, a voice note, or a checked photo. */
  function addPost(draft: { text: string; photo?: string | null; voice?: boolean; to?: PersonId | null; check?: PhotoCheck | null }, now = Date.now()): LoungePost | null {
    const text = draft.text.trim().slice(0, LIMITS.text);
    const photo = draft.photo && draft.check && draft.check.verdict !== "block" ? draft.photo : null;
    if (!text && !photo) return null;
    const check = photo ? draft.check ?? null : null;
    const made: LoungePost = { id: newId("lp", now), author: "you", text, photo, voice: !!draft.voice && !!text, to: draft.to ?? null, createdAt: now, status: statusFor(check), check, reviewedAt: null };
    change(current => {
      const next = { ...current, posts: [...current.posts, made].slice(-LIMITS.posts) };
      if (made.status === "pending_review") next.log = addLog(next, `Held a photo from {you} for a person to check${check?.source === "fallback" ? " (the automatic check couldn't run)" : check?.score != null ? ` (${check.score.toFixed(2)})` : ""}.${current.settings.emailCareTeam ? " The care team was emailed." : ""}`, now);
      return next;
    });
    return made;
  }
  /** The author cancels a held post. The photo is let go. */
  function withdraw(id: string, now = Date.now()) {
    change(current => {
      const item = current.posts.find(entry => entry.id === id);
      if (!item || item.author !== "you" || item.status !== "pending_review") return current;
      const next = editPost(current, id, entry => ({ ...entry, status: "withdrawn", photo: null }));
      next.log = addLog(next, "{you} cancelled a held photo.", now);
      return next;
    });
  }

  return {
    load,
    subscribe(listener: () => void) { listeners.add(listener); return () => { listeners.delete(listener); }; },
    refresh() { state = read(); notify(); },
    /** Back to the sample record (the care team's Settings, for trying the preview again). */
    reset(now = Date.now()) { change(() => seededModeration(now)); },

    /** Counts a photo the check looked at. A blocked one is noted against the person; the photo is not kept. */
    recordCheck(check: PhotoCheck, now = Date.now()): string | null {
      let blockedId: string | null = null;
      change(current => {
        const tally = { ...current.tally };
        if (check.verdict === "block") {
          tally.blocked += 1;
          blockedId = newId("blocked", now);
          const attempt: BlockedUpload = { id: blockedId, author: "you", at: now, score: check.score, labels: check.labels, appealed: false };
          const before = current.blocked.filter(item => item.author === "you").length;
          const next = { ...current, tally, blocked: [attempt, ...current.blocked].slice(0, LIMITS.blocked) };
          next.log = addLog(next, `Blocked a photo from {you}${check.labels.length ? ` (${check.labels.join(", ").toLowerCase()})` : ""}.${before ? ` That is ${before + 1} attempts.` : ""}`, now);
          return next;
        }
        if (check.verdict === "pass") tally.passed += 1;
        else tally.held += 1;
        return { ...current, tally };
      });
      return blockedId;
    },
    addPost,
    withdraw,
    /** The author posts the words of a held post now, without the photo. */
    postWordsOnly(id: string, now = Date.now()): LoungePost | null {
      const item = post(id);
      if (!item || item.author !== "you" || item.status !== "pending_review" || !item.text) return null;
      withdraw(id, now);
      return addPost({ text: item.text, voice: item.voice, to: item.to }, now);
    },

    report(draft: ReportDraft, alsoBlock: boolean, now = Date.now()): ReportOutcome {
      let outcome = "gone" as ReportOutcome;
      change(current => {
        const result = applyReport(current, draft, "you", now);
        outcome = result.outcome;
        if (!alsoBlock || (result.outcome !== "reported" && result.outcome !== "removed")) return result.state;
        if (draft.author === "rob" || draft.author === "kev") return result.state.blockedAuthors.includes(draft.author) ? result.state : { ...result.state, blockedAuthors: [...result.state.blockedAuthors, draft.author] };
        return result.state;
      });
      if (alsoBlock && (outcome === "reported" || outcome === "removed") && draft.author !== "you" && draft.author !== "rob" && draft.author !== "kev") communityStore.block(draft.author);
      return outcome;
    },

    /* The care team's actions. */
    approve(id: string, now = Date.now()) {
      change(current => {
        const item = current.posts.find(post => post.id === id);
        if (!item || item.status !== "pending_review") return current;
        const next = editPost(current, id, post => ({ ...post, status: "live", reviewedAt: now }));
        next.log = addLog(next, `Approved ${authorToken(item.author)}'s photo. It is in the lounge with its original time.`, now);
        if (item.author === "you") next.notes = note(next, "approved", id, item.createdAt, "", now);
        return next;
      });
    },
    /** Takes a post down: a held photo is declined (the author is told), a live post leaves a placeholder. */
    remove(id: string, author: LoungeAuthor, text: string, now = Date.now()) {
      change(current => {
        const item = current.posts.find(post => post.id === id);
        if (item?.status === "pending_review") {
          const next = editPost(current, id, post => ({ ...post, status: "declined", reviewedAt: now, photo: post.photo?.startsWith("art:") ? post.photo : null }));
          next.log = addLog(next, `Removed ${authorToken(item.author)}'s held photo${current.settings.tellAuthor ? " and told them why" : ""}.`, now);
          if (item.author === "you" && current.settings.tellAuthor) next.notes = note(next, "declined", id, item.createdAt, "", now);
          return next;
        }
        if (current.removals[id]) return current;
        const next = removePost(current, id, author, excerptOf(text), "care-team", now, item?.createdAt ?? null);
        next.log = addLog(next, `Removed ${authorToken(author)}'s post.`, now);
        return next;
      });
    },
    /** Keeps a reported post up: more reports are still noted, but no longer take it down. */
    keep(id: string, author: LoungeAuthor, now = Date.now()) {
      change(current => {
        if (current.kept.includes(id) || current.removals[id]) return current;
        const next = { ...current, kept: [...current.kept, id] };
        next.log = addLog(next, `Kept ${authorToken(author)}'s reported post up.`, now);
        return next;
      });
    },
    /** A message from the care team. The person sees theirs in the lounge; for anyone else it is noted in the log. */
    message(author: LoungeAuthor, text: string, now = Date.now()) {
      const words = text.trim().slice(0, LIMITS.message);
      if (!words) return;
      change(current => {
        const next = { ...current, log: addLog(current, `Messaged ${authorToken(author)}: “${excerptOf(words, 60)}”`, now) };
        if (author === "you") next.notes = note(next, "message", null, null, words, now);
        return next;
      });
    },
    /** The person asks the care team to look again at a removed or declined post, or a blocked photo. */
    appeal(target: { noteId?: string; blockedId?: string }, now = Date.now()) {
      change(current => {
        if (target.noteId) {
          const own = current.notes.find(item => item.id === target.noteId);
          if (!own || own.appealed || !own.postId) return current;
          const next = { ...current, notes: current.notes.map(item => (item.id === own.id ? { ...item, appealed: true } : item)), appeals: [...current.appeals, { id: newId("appeal", now), postId: own.postId, blockedId: null, at: now, status: "open" as const }] };
          next.log = addLog(next, `{you} asked the care team to look again at a ${own.kind === "declined" ? "held photo they removed" : "removed post"}.`, now);
          return next;
        }
        const attempt = current.blocked.find(item => item.id === target.blockedId);
        if (!attempt || attempt.appealed) return current;
        const next = { ...current, blocked: current.blocked.map(item => (item.id === attempt.id ? { ...item, appealed: true } : item)), appeals: [...current.appeals, { id: newId("appeal", now), postId: null, blockedId: attempt.id, at: now, status: "open" as const }] };
        next.log = addLog(next, "{you} asked the care team to look again at a blocked photo. The photo wasn't kept, so they'll talk it through.", now);
        return next;
      });
    },
    /** The care team answers a request to look again: put the post back, or keep it down. */
    settleAppeal(id: string, restore: boolean, now = Date.now()) {
      change(current => {
        const appeal = current.appeals.find(item => item.id === id);
        if (!appeal || appeal.status !== "open") return current;
        let next: ModerationState = { ...current, appeals: current.appeals.map(item => (item.id === id ? { ...item, status: restore ? "restored" as const : "upheld" as const } : item)) };
        const postId = appeal.postId;
        if (restore && postId) {
          const removals = { ...next.removals };
          delete removals[postId];
          next = { ...next, removals, kept: next.kept.includes(postId) ? next.kept : [...next.kept, postId] };
          const own = next.posts.find(post => post.id === postId);
          if (own?.status === "declined") next = editPost(next, postId, post => ({ ...post, status: "live", reviewedAt: now }));
          next.notes = note(next, "restored", postId, own?.createdAt ?? null, "", now);
        } else if (!restore) {
          next.notes = note(next, "message", null, null, appeal.blockedId ? "The care team looked at your blocked photo again. It still can't be shared in the lounge, but you're welcome to talk it through with them." : "The care team looked at your post again and it stays removed. You're welcome to talk it through with them.", now);
        }
        next.log = addLog(next, restore ? "Put {you}'s post back after a second look." : "Kept the decision after {you} asked for a second look.", now);
        return next;
      });
    },
    updateSettings(edit: Partial<ModerationSettings>, now = Date.now()) {
      change(current => {
        const settings = readSettings({ ...current.settings, ...edit });
        if (JSON.stringify(settings) === JSON.stringify(current.settings)) return current;
        const words: string[] = [];
        if (settings.threshold !== current.settings.threshold) words.push(`removal after ${settings.threshold} report${settings.threshold === 1 ? "" : "s"}`);
        if (settings.hideForReporter !== current.settings.hideForReporter) words.push(`hide for the reporter ${settings.hideForReporter ? "on" : "off"}`);
        if (settings.tellAuthor !== current.settings.tellAuthor) words.push(`tell the author ${settings.tellAuthor ? "on" : "off"}`);
        if (settings.emailCareTeam !== current.settings.emailCareTeam) words.push(`email on held photos ${settings.emailCareTeam ? "on" : "off"}`);
        if (settings.unsureLow !== current.settings.unsureLow || settings.unsureHigh !== current.settings.unsureHigh) words.push(`unsure between ${settings.unsureLow.toFixed(2)} and ${settings.unsureHigh.toFixed(2)}`);
        const next = { ...current, settings };
        next.log = addLog(next, `Changed the rules: ${words.join(", ")}.`, now);
        return next;
      });
    },
  };
}

export type ModerationStore = ReturnType<typeof createModerationStore>;
export const moderationStore = createModerationStore(() => (typeof localStorage === "undefined" ? null : localStorage));

const EMPTY = seededModeration(0);
let watchers = 0;
// The care team's page in another tab changes the same record: read it again when it does.
const otherTab = (event: StorageEvent) => { if (event.key === MODERATION_KEY || event.key === null) moderationStore.refresh(); };
function subscribeModeration(listener: () => void) {
  const unsubscribe = moderationStore.subscribe(listener);
  if (watchers++ === 0 && typeof window !== "undefined") window.addEventListener("storage", otherTab);
  return () => {
    unsubscribe();
    if (--watchers === 0 && typeof window !== "undefined") window.removeEventListener("storage", otherTab);
  };
}
export const useLoungeModeration = (): ModerationState => useSyncExternalStore(subscribeModeration, moderationStore.load, () => EMPTY);
