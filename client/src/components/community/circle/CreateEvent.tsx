import { useId, useRef, useState, type FormEvent } from "react";
import { circleNow } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { blankDraft, circleEventsStore, draftProblem, draftStart, draftToGathering, DURATIONS, SEAT_CHOICES, type DraftProblem, type EventDraft } from "@/lib/circle-events-store";
import { eventsInWeek, hasRoomInWeek, hostLimits, type HostStanding } from "@/lib/circle-host";
import { AUDIENCES, COMMUNITY_TAGS, FORMATS, REPEATS, type Access, type Audience, type CommunityTag, type Gathering } from "@/lib/circle-gatherings";
import { BackIcon, ClockIcon, GlobeIcon, LockIcon, PlusIcon, SearchIcon, ShieldIcon } from "../icons";
import { Face } from "../parts";
import { EventRow } from "./shared";

const ACCESS: { id: Access; title: string; detail: string }[] = [
  { id: "public", title: "Public", detail: "Anyone in My community can see it and join. Listed in Coming up." },
  { id: "friends", title: "Friends only", detail: "Only the friends you pick can see it. Nobody else knows it exists." },
  { id: "invite", title: "Public, but by invitation", detail: "Listed in Coming up, but people ask to join and you say yes." },
];

const PROBLEMS: Record<DraftProblem, string> = {
  name: "Give it a name first.",
  when: "Choose a date and a start time.",
  past: "That time has gone. Choose one ahead.",
  friends: "Pick at least one friend to invite.",
  seats: "That's more seats than a new host can have.",
};

const minutesLabel = (minutes: number) => (minutes === 60 ? "1 hour" : minutes === 90 ? "1½ hours" : `${minutes} min`);

/** Tags you pick any of. "All ages" and "Everyone" stand alone: choosing one clears the others, and choosing another clears them. */
function toggleTag<T extends string>(list: T[], id: T, all: T): T[] {
  if (id === all) return [all];
  const next = list.includes(id) ? list.filter(item => item !== id) : [...list.filter(item => item !== all), id];
  return next.length ? next : [all];
}

const AccessIcon = ({ access }: { access: Access }) => (
  <span className={`cm-ce-access-icon is-${access}`} aria-hidden="true">
    {access === "public" ? <GlobeIcon size={20} /> : access === "friends" ? <LockIcon size={20} /> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>}
  </span>
);

/**
 * Create a get-together (for someone with host standing): what it's called and what you'll do, how it runs, when,
 * who it's for and the house rules, then who can join: public, friends only (with the friend picker) or public by
 * invitation. A preview shows how it will look in Coming up. It is kept on this device.
 */
export default function CreateEventView({ initial, standing, hostedStarts, friends, now, onBack, onCreated, heading }: {
  initial: EventDraft | null;
  standing: HostStanding;
  /** When the events the person hosts start, for the weekly limit. */
  hostedStarts: { id: string; start: number }[];
  friends: PersonId[];
  now: number;
  onBack: () => void;
  onCreated: (event: Gathering, invited: number) => void;
  heading: boolean;
}) {
  const [draft, setDraft] = useState<EventDraft>(() => initial ?? blankDraft(new Date(now)));
  const [search, setSearch] = useState("");
  const [problem, setProblem] = useState<string>("");
  const [saved, setSaved] = useState("");
  const nameField = useRef<HTMLInputElement>(null);
  const ids = { name: useId(), about: useId(), aboutHint: useId(), who: useId(), picked: useId() };
  const limits = hostLimits(standing);
  const set = (change: Partial<EventDraft>) => { setDraft(current => ({ ...current, ...change })); setProblem(""); setSaved(""); };

  const start = draftStart(draft);
  const others = hostedStarts.filter(item => item.id !== draft.editing).map(item => item.start);
  const usedThisWeek = eventsInWeek(others, now);
  const roomThatWeek = start === null || hasRoomInWeek(standing, others, start);
  // Alira's every-two-days circle is at 4 pm: say so if it is on the chosen day, and whether the times clash.
  const alira = start === null ? null : circleNow(new Date(start)).start;
  const aliraSameDay = alira !== null && start !== null && new Date(alira).toDateString() === new Date(start).toDateString();
  const clashes = aliraSameDay && start! < alira!.getTime() + 60 * 60_000 && start! + draft.minutes * 60_000 > alira!.getTime();
  const shownFriends = friends.filter(who => people[who].name.toLowerCase().includes(search.trim().toLowerCase()));
  const preview = draftToGathering({ ...draft, name: draft.name.trim() || "Your get-together" }, "preview", 0);

  const create = (event: FormEvent) => {
    event.preventDefault();
    const issue = draftProblem(draft, Date.now(), limits.seats) ?? (roomThatWeek ? null : "week");
    if (issue) {
      setProblem(issue === "week" ? `You already have ${limits.eventsPerWeek} events that week. Choose another week.` : PROBLEMS[issue]);
      if (issue === "name") nameField.current?.focus();
      return;
    }
    const made = circleEventsStore.create(draft, Date.now());
    if (made) onCreated(made, draft.access === "friends" ? draft.invited.length : 0);
  };

  const cta = draft.editing ? "Save changes" : draft.access === "friends" ? `Create and invite ${draft.invited.length} friend${draft.invited.length === 1 ? "" : "s"}` : "Put it in Coming up";

  return (
    <form className="cm-ce-page" onSubmit={create} noValidate>
      <div className="cm-ce-topline">
        <button type="button" className="cm-ce-back" onClick={onBack}><BackIcon size={16} />Back to Sunday circle</button>
        <span className="cm-ce-pill"><ShieldIcon size={14} />{limits.eventsPerWeek === null ? "You can host" : `You can host · ${usedThisWeek} of ${limits.eventsPerWeek} events this week used`}</span>
      </div>
      <div>
        <h2 className="cm-ce-title" tabIndex={-1} data-view-heading={heading ? "" : undefined}>{draft.editing ? "Change your get-together" : "Create a get-together"}</h2>
        <p className="cm-ce-intro">You host, Alira helps. She can keep captions on, pass the teacup, and step in if anyone needs her. Everything here can be changed later.</p>
      </div>

      <div className="cm-ce-create">
        <div className="cm-card cm-ce-form">
          <div className="cm-ce-field">
            <label htmlFor={ids.name} className="cm-ce-label">What's it called?</label>
            <input ref={nameField} id={ids.name} type="text" className="cm-ce-input is-big" value={draft.name} maxLength={80} placeholder="Gardening from a chair: autumn jobs" autoComplete="off" onChange={event => set({ name: event.target.value })} />
          </div>
          <div className="cm-ce-field">
            <label htmlFor={ids.about} className="cm-ce-label">What will you do together?</label>
            <textarea id={ids.about} className="cm-ce-input" rows={3} value={draft.detail} maxLength={400} aria-describedby={ids.aboutHint} placeholder="Bulbs, pots and what to prune. Bring a plant to show off, or a question about one that's sulking." onChange={event => set({ detail: event.target.value })} />
            <p className="cm-ce-hint" id={ids.aboutHint}>Two or three sentences is plenty. Alira reads this out when the circle opens.</p>
          </div>

          <fieldset className="cm-ce-field">
            <legend className="cm-ce-label">How does it run?</legend>
            <div className="cm-ce-formats">
              {FORMATS.map(format => (
                <label key={format.id} className={`cm-ce-option ${draft.format === format.id ? "is-on" : ""}`}>
                  <input type="radio" name="cm-ce-format" checked={draft.format === format.id} onChange={() => set({ format: format.id })} />
                  <span><b>{format.label}</b><span>{format.detail}</span></span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="cm-ce-field">
            <legend className="cm-ce-label">When?</legend>
            <div className="cm-ce-when">
              <label>Date<input type="date" className="cm-ce-input" value={draft.date} onChange={event => set({ date: event.target.value })} /></label>
              <label>Starts<input type="time" className="cm-ce-input" value={draft.time} step={300} onChange={event => set({ time: event.target.value })} /></label>
              <label>Lasts<select className="cm-ce-input" value={draft.minutes} onChange={event => set({ minutes: Number(event.target.value) })}>{DURATIONS.map(minutes => <option key={minutes} value={minutes}>{minutesLabel(minutes)}</option>)}</select></label>
              <label>Repeats<select className="cm-ce-input" value={draft.repeats} onChange={event => set({ repeats: event.target.value as EventDraft["repeats"] })}>{REPEATS.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
            </div>
            {aliraSameDay && <p className={`cm-ce-hint is-clock ${clashes ? "is-warn" : ""}`}><ClockIcon size={14} />{clashes ? "Alira's circle is at 4 pm that day. Choose another time so they don't clash." : "Alira's circle is at 4 pm that day. Yours won't clash."}</p>}
          </fieldset>

          <fieldset className="cm-ce-field">
            <legend className="cm-ce-label">Who is it for? <span>· pick any that fit, it helps people find it</span></legend>
            <div className="cm-ce-chips">
              {AUDIENCES.map(item => <button key={item.id} type="button" className={`cm-ce-chip ${draft.audience.includes(item.id) ? "is-on" : ""}`} aria-pressed={draft.audience.includes(item.id)} onClick={() => set({ audience: toggleTag<Audience>(draft.audience, item.id, "all") })}>{item.label}</button>)}
            </div>
            <div className="cm-ce-chips">
              {COMMUNITY_TAGS.map(item => <button key={item.id} type="button" className={`cm-ce-chip ${draft.communities.includes(item.id) ? "is-on" : ""}`} aria-pressed={draft.communities.includes(item.id)} onClick={() => set({ communities: toggleTag<CommunityTag>(draft.communities, item.id, "everyone") })}>{item.label}</button>)}
            </div>
          </fieldset>

          <fieldset className="cm-ce-field">
            <legend className="cm-ce-label">House rules</legend>
            <label className="cm-ce-check">
              <input type="checkbox" checked={draft.access !== "friends" || draft.aliraHelps} disabled={draft.access !== "friends"} onChange={event => set({ aliraHelps: event.target.checked })} />
              <span>Alira sits in as a helper <span className="cm-ce-muted">· captions, pausing the teacup, warning signs. Always on for public events</span></span>
            </label>
            <label className="cm-ce-check"><input type="checkbox" checked={draft.cameras} onChange={event => set({ cameras: event.target.checked })} /><span>Cameras optional</span></label>
            <label className="cm-ce-check"><input type="checkbox" checked={draft.keepSaid} onChange={event => set({ keepSaid: event.target.checked })} /><span>Keep what's said after it ends <span className="cm-ce-muted">· off by default, like Alira's circles</span></span></label>
            <label className="cm-ce-check is-seats">
              <span className="cm-ce-muted">Seats</span>
              <select className="cm-ce-input" value={draft.seats} onChange={event => set({ seats: Number(event.target.value) })}>{SEAT_CHOICES.filter(seats => seats <= limits.seats).map(seats => <option key={seats} value={seats}>{seats}</option>)}</select>
              {limits.eventsPerWeek !== null && <span className="cm-ce-muted">Up to {limits.seats} while you're a new host</span>}
            </label>
          </fieldset>
        </div>

        <div className="cm-ce-create-side">
          <section className="cm-card cm-ce-who" aria-labelledby={ids.who}>
            <div>
              <h3 className="cm-side-title" id={ids.who}>Who can join?</h3>
              <p className="cm-ce-sub">You can change this any time before it starts.</p>
            </div>
            {ACCESS.map(option => (
              <button key={option.id} type="button" className={`cm-ce-access ${draft.access === option.id ? "is-on" : ""}`} aria-pressed={draft.access === option.id} onClick={() => set({ access: option.id })}>
                <AccessIcon access={option.id} />
                <span><b>{option.title}</b><span>{option.detail}</span></span>
              </button>
            ))}
            {draft.access === "friends" && (
              <fieldset className="cm-ce-picker cm-pop">
                <legend className="cm-ce-label cm-ce-picker-head">Pick friends <span id={ids.picked} className="cm-ce-picked">{`${draft.invited.length} picked`}</span></legend>
                <label className="cm-ce-search"><SearchIcon size={16} /><span className="cm-sr">Search your friends</span><input type="search" value={search} placeholder="Search your friends" onChange={event => setSearch(event.target.value)} /></label>
                {shownFriends.map(who => (
                  <label key={who} className={`cm-ce-friend ${draft.invited.includes(who) ? "is-on" : ""}`}>
                    <input type="checkbox" checked={draft.invited.includes(who)} onChange={() => set({ invited: draft.invited.includes(who) ? draft.invited.filter(item => item !== who) : [...draft.invited, who] })} />
                    <Face who={who} size={32} />
                    <span><b>{people[who].name}</b><span>{people[who].about}</span></span>
                  </label>
                ))}
                {!shownFriends.length && <p className="cm-ce-hint">{friends.length ? "No friend by that name." : "You haven't any friends here yet. Add some from Friends."}</p>}
                <label className="cm-ce-check"><input type="checkbox" checked={draft.bringFriend} onChange={event => set({ bringFriend: event.target.checked })} /><span>Let them bring one friend each</span></label>
              </fieldset>
            )}
          </section>

          <section className="cm-card cm-ce-preview" aria-label="How it will look in Coming up">
            <p className="cm-ce-label">How it will look in Coming up</p>
            {preview && <EventRow event={preview} friends={[]} line={draft.repeats === "once" ? "" : ` · ${REPEATS.find(item => item.id === draft.repeats)?.label}`} />}
          </section>

          <div className="cm-ce-actions">
            <button type="submit" className="cm-btn cm-btn-rust cm-btn-wide cm-ce-cta"><PlusIcon size={16} />{cta}</button>
            <button type="button" className="cm-btn cm-btn-quiet cm-btn-wide" onClick={() => { circleEventsStore.saveDraft(draft); setSaved("Saved as a draft. It'll be here next time you press Create an event."); }}>Save as a draft</button>
            <p className="cm-problem" role="alert">{problem}</p>
            <p className="cm-status" role="status">{saved}</p>
            <p className="cm-ce-hint is-centre">By hosting you agree to the circle guidelines. Alira can pause or end any circle if someone is unsafe.</p>
          </div>
        </div>
      </div>
    </form>
  );
}
