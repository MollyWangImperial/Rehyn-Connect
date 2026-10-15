import { useId, useState } from "react";
import { SAMPLE_GOING } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { circleEventsStore, useCircleEvents } from "@/lib/circle-events-store";
import { type HostEligibility, type HostStanding } from "@/lib/circle-host";
import { REPEATS, type Gathering } from "@/lib/circle-gatherings";
import { goingCount, isLive, myEvents, standingFor } from "@/lib/circle-listing";
import { useCommunity } from "@/lib/community-store";
import { CheckIcon, ShieldIcon } from "../icons";
import { Face } from "../parts";
import { CalendarRow, useReminder } from "./ComingUp";
import { EventRow } from "./shared";
import { checkText } from "./standing-text";

/** What the person is going to without answering: the examples, and Alira's get-togethers they asked to be reminded of. */
function useGoingIds(): string[] {
  const community = useCommunity();
  const memory = useCircleEvents();
  return [...SAMPLE_GOING, ...community.reminders, ...memory.reminders];
}

type Filter = "all" | "waiting" | "going" | "past";
const FILTERS: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, { id: "waiting", label: "Waiting for me" }, { id: "going", label: "Going" }, { id: "past", label: "Past" }];

/** "You can host": the four things host standing checks, each met or not. The limits for new hosts stay in the model (circle-host.ts). */
function StandingCard({ eligibility, standing, now, onCreate }: { eligibility: HostEligibility; standing: HostStanding; now: number; onCreate: () => void }) {
  return (
    <section className="cm-card cm-ce-standing" aria-labelledby="cm-ce-standing-title">
      <div className="cm-ce-standing-head">
        <span className={`cm-ce-shield ${eligibility.eligible ? "" : "is-warm"}`} aria-hidden="true"><ShieldIcon size={22} /></span>
        <div>
          <h3 className="cm-side-title" id="cm-ce-standing-title">{eligibility.eligible ? "You can host" : "Not quite yet"}</h3>
          {!eligibility.eligible && <p className="cm-ce-sub">{`${eligibility.met} of 4`}</p>}
        </div>
      </div>
      <ul className="cm-ce-checks">
        {eligibility.checks.map(check => {
          const words = checkText(check, standing, now);
          return (
            <li key={check.id} className={check.met ? "is-met" : ""}>
              <span className="cm-ce-tick" aria-hidden="true">{check.met ? <CheckIcon size={12} /> : null}</span>
              <span>{words.title}<span className="cm-ce-muted">{` · ${words.short}`}</span><span className="cm-sr">{check.met ? " (done)" : " (not yet)"}</span></span>
            </li>
          );
        })}
      </ul>
      {!eligibility.eligible &&<button type="button" className="cm-ce-button" onClick={onCreate}>See what's left</button>}
    </section>
  );
}

/** Pick friends to invite to an event you host. */
function InviteMore({ event, friends, onDone }: { event: Gathering; friends: PersonId[]; onDone: (count: number) => void }) {
  const [picked, setPicked] = useState<PersonId[]>([]);
  const choices = friends.filter(who => !event.invited.includes(who));
  const id = useId();
  if (!choices.length) return <p className="cm-ce-inline-note" role="status">Everyone in your friends list is invited already.</p>;
  return (
    <fieldset className="cm-ce-invite-more cm-pop">
      <legend id={id}>Invite more friends</legend>
      <div className="cm-ce-invite-list">
        {choices.map(who => (
          <label key={who} className="cm-ce-friend">
            <input type="checkbox" checked={picked.includes(who)} onChange={() => setPicked(list => (list.includes(who) ? list.filter(item => item !== who) : [...list, who]))} />
            <Face who={who} size={32} /><span>{people[who].name}</span>
          </label>
        ))}
      </div>
      <button type="button" className="cm-ce-button is-green" disabled={!picked.length} onClick={() => { circleEventsStore.invite(event.id, picked); onDone(picked.length); }}>
        {picked.length ? `Invite ${picked.length}` : "Pick a friend"}
      </button>
    </fieldset>
  );
}

function HostingRow({ event, friends, now, onEdit, onOpenOwn }: { event: Gathering; friends: PersonId[]; now: number; onEdit: (event: Gathering) => void; onOpenOwn: () => void }) {
  const [inviting, setInviting] = useState(false);
  const [note, setNote] = useState("");
  const memory = useCircleEvents();
  const live = isLive(event, now);
  const repeat = REPEATS.find(item => item.id === event.repeats)?.label ?? "";
  const yes = event.access === "friends" ? `${event.invited.length} invited · ${event.going} said yes` : `${event.going} going · ${Math.max(0, event.seats - event.going)} seats left`;
  const share = async () => {
    const link = `${typeof window === "undefined" ? "" : window.location.origin}/community?space=circle&tab=coming`;
    try { await navigator.clipboard.writeText(link); setNote("Link copied. Paste it to anyone in My community."); }
    catch { setNote(`Share this link: ${link}`); }
  };
  const sr = <span className="cm-sr">{`: ${event.name}`}</span>;
  return (
    <div className="cm-ce-item">
      <EventRow event={event} friends={friends} live={live} line={` · ${event.repeats === "once" ? "One-off" : repeat}`} hostExtra={yes}>
        {live && event.id === "y-crossword" && <button type="button" className="cm-ce-button is-rust" onClick={onOpenOwn}>Open your circle{sr}</button>}
        {event.access === "friends"
          ? <button type="button" className="cm-ce-button" aria-expanded={inviting} onClick={() => setInviting(!inviting)}>Invite more{sr}</button>
          : <button type="button" className="cm-ce-button" onClick={share}>Share{sr}</button>}
        <button type="button" className="cm-ce-button" onClick={() => onEdit(event)}>Edit{sr}</button>
        {memory.created.some(item => item.id === event.id) && !event.id.startsWith("y-") && (
          <button type="button" className="cm-ce-button is-quiet" onClick={() => circleEventsStore.cancel(event.id)}>Cancel it{sr}</button>
        )}
      </EventRow>
      {inviting && <InviteMore event={event} friends={friends} onDone={count => { setInviting(false); setNote(`Invited ${count} more. They'll see it in their invitations.`); }} />}
      <p className="cm-ce-inline-note" role="status">{note}</p>
    </div>
  );
}

function GoingRow({ event, friends, now }: { event: Gathering; friends: PersonId[]; now: number }) {
  const memory = useCircleEvents();
  const [reminded, toggleReminder] = useReminder(event.id);
  const [calendar, setCalendar] = useState(false);
  const going = useGoingIds();
  const standing = standingFor(event, memory, going);
  const count = goingCount(event, standing, going);
  const sr = <span className="cm-sr">{`: ${event.name}`}</span>;
  const past = event.start + event.minutes * 60_000 <= now;
  const invitedBy = event.host.kind === "member" && event.host.who !== "you" ? people[event.host.who].name : "Alira";
  return (
    <div className="cm-ce-item">
      <EventRow event={event} friends={friends} highlight={standing === "invited"} live={isLive(event, now)}
        line={standing === "invited" ? ` · ${invitedBy} invited you${event.detail ? ` · "${event.detail}"` : ""}` : reminded ? " · Reminder set for half an hour before" : undefined}
        hostExtra={event.access === "friends" ? `${count} of ${event.invited.length} said yes` : `${count} going`}>
        {past ? <span className="cm-ce-note">You went</span>
          : standing === "invited" ? (
            <>
              <button type="button" className="cm-ce-button is-rust" onClick={() => circleEventsStore.answer(event.id, "going")}>Accept{sr}</button>
              <button type="button" className="cm-ce-button" onClick={() => circleEventsStore.answer(event.id, "declined")}>Not this time{sr}</button>
            </>
          ) : standing === "asked" ? (
            <>
              <span className="cm-ce-note">Asked to join</span>
              <button type="button" className="cm-ce-button" onClick={() => circleEventsStore.answer(event.id, null)}>Take it back{sr}</button>
            </>
          ) : (
            <>
              <span className="cm-ce-button is-set is-static"><CheckIcon size={14} />Going</span>
              <button type="button" className="cm-ce-button" aria-expanded={calendar} onClick={() => setCalendar(!calendar)}>Add to calendar{sr}</button>
              <button type="button" className="cm-ce-button is-quiet" onClick={() => { circleEventsStore.answer(event.id, "declined"); if (reminded) toggleReminder(); }}>Can't make it{sr}</button>
            </>
          )}
      </EventRow>
      {calendar && !past && standing === "going" && <CalendarRow event={event} />}
    </div>
  );
}

/**
 * My events: host standing, the events the person hosts (Invite more or Share, Edit), and the invitations and
 * get-togethers they're going to.
 */
export default function MyEventsView({ events, friends, hidden, eligibility, standing, now, onCreate, onEdit, onOpenOwn, heading, notice }: {
  events: Gathering[];
  friends: PersonId[];
  hidden: PersonId[];
  eligibility: HostEligibility;
  standing: HostStanding;
  now: number;
  onCreate: () => void;
  onEdit: (event: Gathering) => void;
  onOpenOwn: () => void;
  heading: boolean;
  notice: string;
}) {
  const memory = useCircleEvents();
  const [filter, setFilter] = useState<Filter>("all");
  const mine = myEvents(events, memory, useGoingIds(), now, hidden);
  const rows = filter === "waiting" ? mine.waiting : filter === "going" ? mine.going : filter === "past" ? mine.past : [...mine.waiting, ...mine.going];
  const titleId = useId();
  return (
    <div className="cm-ce-page">
      {notice && <p className="cm-ce-notice cm-pop" role="status"><CheckIcon size={16} />{notice}</p>}
      <div className="cm-ce-mine-grid">
        <StandingCard eligibility={eligibility} standing={standing} now={now} onCreate={onCreate} />
        <section className="cm-card cm-ce-list cm-ce-hosting" aria-labelledby="cm-ce-hosting-title">
          <div className="cm-ce-list-head">
            <div>
              <h2 className="cm-side-title" id="cm-ce-hosting-title" tabIndex={-1} data-view-heading={heading ? "" : undefined}>Hosting</h2>
              <p className="cm-ce-sub">{mine.hosting.length ? `${mine.hosting.length} event${mine.hosting.length === 1 ? "" : "s"} you've made` : "Nothing yet. Press Create an event to start one."}</p>
            </div>
          </div>
          {mine.hosting.map(event => <HostingRow key={event.id} event={event} friends={friends} now={now} onEdit={onEdit} onOpenOwn={onOpenOwn} />)}
          <p className="cm-ce-foot">As host you can pass the teacup, mute someone for the session, or ask the circle to vote on whether someone should leave. You can never remove someone on your own.</p>
        </section>
      </div>

      <section className="cm-card cm-ce-list" aria-labelledby={titleId}>
        <div className="cm-ce-list-head">
          <div>
            <h3 className="cm-side-title" id={titleId}>Invitations and going</h3>
            <p className="cm-ce-sub">{`${mine.waiting.length} waiting for your answer · ${mine.going.length} you're going to`}</p>
          </div>
          <div className="cm-ce-filter" role="group" aria-label="Show">
            {FILTERS.map(item => <button key={item.id} type="button" className={`cm-ce-chip is-small ${filter === item.id ? "is-on" : ""}`} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
          </div>
        </div>
        {rows.map(event => <GoingRow key={event.id} event={event} friends={friends} now={now} />)}
        {!rows.length && <p className="cm-ce-empty">{filter === "past" ? "Nothing here yet." : "Nothing here. Have a look in Coming up."}</p>}
      </section>
    </div>
  );
}
