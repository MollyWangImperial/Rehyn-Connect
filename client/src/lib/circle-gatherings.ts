// The Sunday circle's events as Coming up and My events list them: Alira's own get-togethers and the
// ones members host, each with who it's for, which community, and who can join:
//   - public: anyone in My community sees it and can join;
//   - friends only: hidden from everyone except the friends the host picked (and the host). Nobody
//     else is told it exists, so it must never reach anyone else's list;
//   - public, but by invitation: listed for everyone, people ask to join and the host says yes.
// These functions are pure, so the privacy rule can be tested.

import type { PersonId } from "@/content/community-samples";

export type Audience = "all" | "under35" | "35to60" | "over60" | "carers" | "newly";
export const AUDIENCES: { id: Audience; label: string }[] = [
  { id: "all", label: "All ages" }, { id: "under35", label: "Under 35" }, { id: "35to60", label: "35 to 60" },
  { id: "over60", label: "Over 60" }, { id: "carers", label: "Carers & family" }, { id: "newly", label: "Newly diagnosed" },
];
export type CommunityTag = "everyone" | "stroke" | "parkinsons" | "ms" | "brain" | "covid";
export const COMMUNITY_TAGS: { id: CommunityTag; label: string }[] = [
  { id: "everyone", label: "Everyone" }, { id: "stroke", label: "Stroke" }, { id: "parkinsons", label: "Parkinson's" },
  { id: "ms", label: "MS" }, { id: "brain", label: "Brain injury" }, { id: "covid", label: "Long COVID" },
];
export type Access = "public" | "friends" | "invite";
export const accessLabels: Record<Access, string> = { public: "Public", friends: "Friends only", invite: "By invitation" };
export type EventFormat = "teacup" | "open" | "voice" | "game";
export const FORMATS: { id: EventFormat; label: string; detail: string }[] = [
  { id: "teacup", label: "Teacup circle", detail: "One person speaks at a time. Gentle, good for larger groups" },
  { id: "open", label: "Open chat", detail: "Everyone talks freely. Best for up to 8" },
  { id: "voice", label: "Voice only", detail: "No cameras. Good on a walk or in bed" },
  { id: "game", label: "Quiz or game", detail: "Alira keeps score, or doesn't" },
];
export const formatLabel = (format: EventFormat) => FORMATS.find(item => item.id === format)?.label ?? "";
export type Repeats = "once" | "weekly" | "fortnightly" | "monthly";
export const REPEATS: { id: Repeats; label: string }[] = [
  { id: "once", label: "Just once" }, { id: "weekly", label: "Every week" }, { id: "fortnightly", label: "Every two weeks" }, { id: "monthly", label: "Every month" },
];

/** "you" is the person using the app. */
export type Viewer = PersonId | "you";
export type EventHost = { kind: "alira"; with?: PersonId } | { kind: "member"; who: Viewer; age?: number };

export type Gathering = {
  id: string;
  name: string;
  detail: string;
  /** When it starts (ms) and how long it lasts. */
  start: number;
  minutes: number;
  format: EventFormat;
  repeats: Repeats;
  host: EventHost;
  access: Access;
  /** Friends only: who the host picked. Everyone else never sees it. */
  invited: Viewer[];
  bringFriend: boolean;
  audience: Audience[];
  communities: CommunityTag[];
  seats: number;
  /** How many are going (or said yes), and a few of their faces. */
  going: number;
  faces: PersonId[];
  /** The colour of an Alira get-together's date page (its event's theme), if it is one. */
  theme?: string;
  /** House rules a member chose. Alira always sits in on public events. */
  rules?: { aliraHelps: boolean; cameras: boolean; keepSaid: boolean };
};

export const isAlira = (event: Gathering) => event.host.kind === "alira";
export const hostedBy = (event: Gathering, who: Viewer) => event.host.kind === "member" && event.host.who === who;

/**
 * Whether `viewer` may know an event exists. Public and by-invitation events are listed for everyone.
 * A friends-only event is seen only by its host and the friends the host picked. Someone the viewer
 * has blocked (`hidden`) doesn't appear as a host either.
 */
export function canSeeGathering(event: Gathering, viewer: Viewer, hidden: readonly Viewer[] = []): boolean {
  if (event.host.kind === "member" && event.host.who !== viewer && hidden.includes(event.host.who)) return false;
  if (event.access !== "friends") return true;
  return hostedBy(event, viewer) || event.invited.includes(viewer);
}

export type HostedByFilter = "anyone" | "alira" | "members" | "friends";
export const HOSTED_BY: { id: HostedByFilter; label: string }[] = [
  { id: "anyone", label: "Anyone" }, { id: "alira", label: "Alira" }, { id: "members", label: "Members" }, { id: "friends", label: "My friends" },
];
export type GatheringFilters = { audience: Audience; community: CommunityTag; hostedBy: HostedByFilter };
export const NO_FILTERS: GatheringFilters = { audience: "all", community: "everyone", hostedBy: "anyone" };

/**
 * Whether an event fits the chips chosen above the list. "All ages" and "Everyone" show every event;
 * otherwise an event fits when it is tagged for that group, or for everyone ("All ages", "Everyone").
 */
export function matchesFilters(event: Gathering, filters: GatheringFilters, friends: readonly PersonId[]): boolean {
  if (filters.audience !== "all" && !event.audience.includes(filters.audience) && !event.audience.includes("all")) return false;
  if (filters.community !== "everyone" && !event.communities.includes(filters.community) && !event.communities.includes("everyone")) return false;
  const host = event.host;
  if (filters.hostedBy === "alira") return host.kind === "alira";
  if (filters.hostedBy === "members") return host.kind === "member";
  if (filters.hostedBy === "friends") return host.kind === "member" && host.who !== "you" && friends.includes(host.who);
  return true;
}

/** Coming up: what the viewer may see, not over yet, matching the filters, soonest first. */
export function comingUpFor(events: readonly Gathering[], viewer: Viewer, filters: GatheringFilters, friends: readonly PersonId[], now: number, hidden: readonly Viewer[] = []): Gathering[] {
  return events
    .filter(event => event.start + event.minutes * 60_000 > now && canSeeGathering(event, viewer, hidden) && matchesFilters(event, filters, friends))
    .sort((a, b) => a.start - b.start);
}

/** "Friday 16 October, 4 to 5 pm", "Monday 19 October, 12.30 to 1 pm", "Saturday 24 October, 11 am to 12". */
export function whenRange(start: number, minutes: number): string {
  const from = new Date(start);
  const to = new Date(start + minutes * 60_000);
  const day = from.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const time = (date: Date) => `${date.getHours() % 12 || 12}${date.getMinutes() ? `.${String(date.getMinutes()).padStart(2, "0")}` : ""}`;
  const half = (date: Date) => (date.getHours() < 12 ? "am" : "pm");
  if (to.getHours() === 12 && to.getMinutes() === 0) return `${day}, ${time(from)} ${half(from)} to 12`;
  if (half(from) === half(to)) return `${day}, ${time(from)} to ${time(to)} ${half(to)}`;
  return `${day}, ${time(from)} ${half(from)} to ${time(to)} ${half(to)}`;
}
