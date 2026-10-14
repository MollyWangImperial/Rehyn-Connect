import type { ReactNode } from "react";
import { MEMBER_ROOM_IDS, type MemberRoomId } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { accessLabels, AUDIENCES, COMMUNITY_TAGS, formatLabel, whenRange, type Access, type Gathering } from "@/lib/circle-gatherings";
import { GlobeIcon, LockIcon } from "../icons";
import { AliraMark, Face, MyFace } from "../parts";

// Pieces the Sunday circle's pages share: their addresses, the event row Coming up and My events
// both use, its badges and the host line.

/* ------------------------------------------------------------------ addresses */

/** The Sunday circle's pages: the live circle, Coming up, My events and Create an event. */
export type CircleTab = "live" | "coming" | "mine" | "create";
const CIRCLE_TABS: CircleTab[] = ["live", "coming", "mine", "create"];

/** Where in the Sunday circle an address points: `tab=`, a member circle (`room=`), and `host=new` to preview a new member. */
export type CirclePlace = { tab: CircleTab; room: MemberRoomId | null; isNew: boolean };

export function circlePlaceFrom(search: string): CirclePlace {
  const query = new URLSearchParams(search);
  const tab = query.get("tab");
  const room = query.get("room");
  const place: CirclePlace = { tab: CIRCLE_TABS.includes(tab as CircleTab) ? (tab as CircleTab) : "live", room: null, isNew: query.get("host") === "new" };
  if (place.tab === "live" && MEMBER_ROOM_IDS.includes(room as MemberRoomId)) place.room = room as MemberRoomId;
  return place;
}

/** The address of a Sunday circle page. `host=new` is kept, so the preview stays as it was chosen. */
export function circleHref(tab: CircleTab, options: { room?: MemberRoomId | null; isNew?: boolean } = {}): string {
  const params = ["space=circle"];
  if (tab !== "live") params.push(`tab=${tab}`);
  if (tab === "live" && options.room) params.push(`room=${options.room}`);
  if (options.isNew) params.push("host=new");
  return `/community?${params.join("&")}`;
}

/* ------------------------------------------------------------------ the row */

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function DateBlock({ at }: { at: number }) {
  const date = new Date(at);
  return <span className="cm-ce-date" aria-hidden="true"><span>{DAY_NAMES[date.getDay()]}</span><b>{date.getDate()}</b></span>;
}

export function AccessBadge({ access }: { access: Access }) {
  return (
    <span className={`cm-ce-badge is-${access}`}>
      {access === "public" ? <GlobeIcon size={12} strokeWidth={2.2} /> : access === "friends" ? <LockIcon size={12} strokeWidth={2.2} /> : <EnvelopeIcon />}
      {accessLabels[access]}
    </span>
  );
}

const EnvelopeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

const COUNT_WORDS = ["No one", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
/** "Eight", for "Eight of us here". */
export const countWords = (count: number) => COUNT_WORDS[count] ?? String(count);

export const nameOfViewer =(who: PersonId | "you") => (who === "you" ? "you" : people[who].name);

/** "Hosted by Alira", "Hosted by Priya, 29 · your friend", "Hosted by you". */
export function HostLine({ event, friends, extra }: { event: Gathering; friends: readonly PersonId[]; extra?: string }) {
  const host = event.host;
  if (host.kind === "alira") {
    return <span className="cm-ce-host"><AliraMark size={20} />{`Hosted by Alira${host.with ? ` with ${people[host.with].name}` : ""}${extra ? ` · ${extra}` : ""}`}</span>;
  }
  const who = host.who;
  const label = who === "you" ? "Hosted by you" : `Hosted by ${people[who].name}${host.age ? `, ${host.age}` : ""}${friends.includes(who) ? " · your friend" : ""}`;
  return <span className="cm-ce-host">{who === "you" ? <MyFace size={20} /> : <Face who={who} size={20} />}{`${label}${extra ? ` · ${extra}` : ""}`}</span>;
}

/** A few faces of who is going, and how many. */
export function Going({ faces, label }: { faces: PersonId[]; label: string }) {
  return (
    <span className="cm-ce-going">
      {faces.length > 0 && <span className="cm-ce-faces">{faces.slice(0, 3).map(who => <Face key={who} who={who} size={26} />)}</span>}
      {label}
    </span>
  );
}

/** One event: its date, name, who can join, when and how it runs, who it's for and who hosts it, and its buttons. */
export function EventRow({ event, friends, line, hostExtra, aside, highlight = false, live = false, children }: {
  event: Gathering;
  friends: readonly PersonId[];
  /** What follows the time ("Teacup circle · …"); the event's description unless given. */
  line?: ReactNode;
  hostExtra?: string;
  /** Beside the buttons: who's going. */
  aside?: ReactNode;
  highlight?: boolean;
  live?: boolean;
  children?: ReactNode;
}) {
  const tags = [
    ...event.audience.map(id => ({ id, label: AUDIENCES.find(item => item.id === id)?.label ?? id, warm: id !== "all" && id !== "carers" && id !== "newly" })),
    ...event.communities.map(id => ({ id: `c-${id}`, label: COMMUNITY_TAGS.find(item => item.id === id)?.label ?? id, warm: false })),
  ];
  return (
    <article className={`cm-ce-row ${highlight ? "is-highlight" : ""}`}>
      <DateBlock at={event.start} />
      <div className="cm-ce-row-main">
        <div className="cm-ce-row-title">
          <h4>{event.name}</h4>
          {live ? <span className="cm-ce-badge is-live">Live now</span> : <AccessBadge access={event.access} />}
        </div>
        <p className="cm-ce-row-when">{`${whenRange(event.start, event.minutes)} · ${formatLabel(event.format)}`}{line === undefined ? (event.detail ? ` · ${event.detail}` : "") : line}</p>
        <div className="cm-ce-row-tags">
          {tags.map(tag => <span key={tag.id} className={`cm-ce-tag ${tag.warm ? "is-warm" : ""}`}>{tag.label}</span>)}
          <HostLine event={event} friends={friends} extra={hostExtra} />
        </div>
      </div>
      <div className="cm-ce-row-side">
        {aside}
        {children}
      </div>
    </article>
  );
}
