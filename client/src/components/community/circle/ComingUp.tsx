import { useId, useState } from "react";
import { CIRCLE_MINUTES, isCircleOccurrenceId, SAMPLE_GOING } from "@/content/circle-events";
import { type PersonId } from "@/content/community-samples";
import { circleEventsStore, useCircleEvents } from "@/lib/circle-events-store";
import { AUDIENCES, COMMUNITY_TAGS, comingUpFor, HOSTED_BY, isAlira, NO_FILTERS, type Gathering, type GatheringFilters, type HostedByFilter } from "@/lib/circle-gatherings";
import { goingCount, isLive, standingFor } from "@/lib/circle-listing";
import { communityStore, useCommunity } from "@/lib/community-store";
import { downloadIcs, googleCalendarUrl, openCalendar, outlookCalendarUrl, type CircleMeeting } from "../circle-calendar";
import { CalendarIcon, CheckIcon, DownloadIcon } from "../icons";
import { EventRow, Going, nameOfViewer } from "./shared";

/** Add to calendar: Google, Outlook, or a file for Apple and the rest. */
export function CalendarRow({ event }: { event: Gathering }) {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const meeting: CircleMeeting = { id: event.id, name: `${event.name}, in the Sunday circle`, detail: event.detail, minutes: event.minutes || CIRCLE_MINUTES, weekly: event.repeats === "weekly" };
  const start = new Date(event.start);
  return (
    <div className="cm-calendar-row cm-ce-calendar cm-pop" role="group" aria-label={`Add ${event.name} to your calendar`}>
      <span className="cm-calendar-label"><CalendarIcon size={16} />Add to your calendar</span>
      <button type="button" className="cm-calendar-button" onClick={() => openCalendar(googleCalendarUrl(meeting, start, origin))}>Google<span className="cm-sr"> Calendar, opens in a new tab</span></button>
      <button type="button" className="cm-calendar-button" onClick={() => openCalendar(outlookCalendarUrl(meeting, start, origin))}>Outlook<span className="cm-sr">, opens in a new tab</span></button>
      <button type="button" className="cm-calendar-button" onClick={() => downloadIcs(meeting, start)}><DownloadIcon size={14} />Apple and others<span className="cm-sr">: save a calendar file</span></button>
    </div>
  );
}

/** Reminders for Alira's every-two-days get-togethers live with the rest of My community; the others here. */
export function useReminder(id: string): [boolean, () => void] {
  const community = useCommunity();
  const events = useCircleEvents();
  if (isCircleOccurrenceId(id)) return [community.reminders.includes(id), () => communityStore.toggleReminder(id)];
  return [events.reminders.includes(id), () => circleEventsStore.toggleReminder(id)];
}

export function RemindButton({ event }: { event: Gathering }) {
  const [on, toggle] = useReminder(event.id);
  return (
    <button type="button" className={`cm-ce-button ${on ? "is-set" : ""}`} aria-pressed={on} onClick={toggle}>
      {on ? <><CheckIcon size={14} />Reminder set</> : "Remind me"}<span className="cm-sr">{` for ${event.name}`}</span>
    </button>
  );
}

/** The buttons for one event in Coming up, by where it stands for the person. */
function RowActions({ event, now, onOpenOwn }: { event: Gathering; now: number; onOpenOwn: () => void }) {
  const memory = useCircleEvents();
  const standing = standingFor(event, memory, SAMPLE_GOING);
  const host = event.host.kind === "member" ? nameOfViewer(event.host.who) : "Alira";
  const sr = <span className="cm-sr">{`: ${event.name}`}</span>;
  if (standing === "hosting") {
    return isLive(event, now) && event.id === "y-crossword"
      ? <button type="button" className="cm-ce-button is-rust" onClick={onOpenOwn}>Open your circle{sr}</button>
      : <span className="cm-ce-note">You're hosting</span>;
  }
  if (isAlira(event)) return <RemindButton event={event} />;
  if (standing === "invited") {
    return (
      <>
        <button type="button" className="cm-ce-button is-rust" onClick={() => circleEventsStore.answer(event.id, "going")}>Accept invite{sr}</button>
        <button type="button" className="cm-ce-button" onClick={() => circleEventsStore.answer(event.id, "declined")}>Not this time{sr}</button>
      </>
    );
  }
  if (standing === "declined") {
    return <><span className="cm-ce-note">Not this time</span><button type="button" className="cm-ce-button" onClick={() => circleEventsStore.answer(event.id, null)}>Change my mind{sr}</button></>;
  }
  if (event.access === "invite") {
    const asked = standing === "asked" || standing === "going";
    return (
      <button type="button" className={`cm-ce-button ${asked ? "is-set" : "is-green"}`} aria-pressed={asked} onClick={() => circleEventsStore.answer(event.id, asked ? null : "asked")}>
        {asked ? <><CheckIcon size={14} />{`Asked ${host}`}</> : "Ask to join"}{sr}
      </button>
    );
  }
  const going = standing === "going";
  return (
    <button type="button" className={`cm-ce-button ${going ? "is-set" : "is-green"}`} aria-pressed={going} onClick={() => circleEventsStore.answer(event.id, going ? null : "going")}>
      {going ? <><CheckIcon size={14} />Going</> : "Join"}{sr}
    </button>
  );
}

function ChipRow<T extends string>({ label, options, value, onChange }: { label: string; options: { id: T; label: string }[]; value: T; onChange: (value: T) => void }) {
  const id = useId();
  return (
    <div className="cm-ce-filter" role="group" aria-labelledby={id}>
      <span className="cm-ce-filter-label" id={id}>{label}</span>
      {options.map(option => (
        <button key={option.id} type="button" className={`cm-ce-chip ${value === option.id ? "is-on" : ""}`} aria-pressed={value === option.id} onClick={() => onChange(option.id)}>{option.label}</button>
      ))}
    </div>
  );
}

/**
 * Coming up: the filters (who it's for, which community, who hosts), and every get-together the person may see,
 * Alira's and members', soonest first. Friends-only events show only to the friends invited.
 */
export default function ComingUpView({ events, friends, hidden, now, onOpenOwn, heading }: {
  events: Gathering[];
  friends: PersonId[];
  hidden: PersonId[];
  now: number;
  onOpenOwn: () => void;
  heading: boolean;
}) {
  const [filters, setFilters] = useState<GatheringFilters>(NO_FILTERS);
  const community = useCommunity();
  const memory = useCircleEvents();
  const shown = comingUpFor(events, "you", filters, friends, now, hidden);
  const set = (change: Partial<GatheringFilters>) => setFilters(current => ({ ...current, ...change }));
  const titleId = useId();

  return (
    <div className="cm-ce-page">
      <section className="cm-card cm-ce-filters" aria-label="Filter the get-togethers">
        <ChipRow label="Who it's for" options={AUDIENCES} value={filters.audience} onChange={audience => set({ audience })} />
        <div className="cm-ce-filter-line">
          <ChipRow label="Community" options={COMMUNITY_TAGS} value={filters.community} onChange={community => set({ community })} />
          <label className="cm-ce-select"><span>Hosted by</span>
            <select value={filters.hostedBy} onChange={event => set({ hostedBy: event.target.value as HostedByFilter })}>
              {HOSTED_BY.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
          </label>
        </div>
      </section>

      <section className="cm-card cm-ce-list" aria-labelledby={titleId}>
        <div className="cm-ce-list-head">
          <div>
            <h2 className="cm-side-title" id={titleId} tabIndex={-1} data-view-heading={heading ? "" : undefined}>Coming up</h2>
            {!shown.length && <p className="cm-ce-sub" role="status">Nothing coming up that fits these filters.</p>}
          </div>
        </div>
        {shown.map(event => {
          const standing = standingFor(event, memory, SAMPLE_GOING);
          const count = goingCount(event, standing, SAMPLE_GOING);
          const reminded = isCircleOccurrenceId(event.id) ? community.reminders.includes(event.id) : memory.reminders.includes(event.id);
          const friendsLine = event.access === "friends" && event.host.kind === "member" && event.host.who !== "you"
            ? ` · ${nameOfViewer(event.host.who)} invited you${event.invited.length > 1 ? ` and ${event.invited.length - 1} others` : ""}. Only ${nameOfViewer(event.host.who)}'s friends can see this`
            : undefined;
          return (
            <div key={event.id} className="cm-ce-item">
              <EventRow event={event} friends={friends} live={isLive(event, now)} highlight={standing === "invited"} line={friendsLine}
                aside={<Going faces={event.faces} label={event.access === "friends" ? `${count} of ${event.invited.length} said yes` : `${count} going`} />}>
                <RowActions event={event} now={now} onOpenOwn={onOpenOwn} />
              </EventRow>
              {reminded && <CalendarRow event={event} />}
            </div>
          );
        })}
      </section>
    </div>
  );
}
