import { useEffect, useId, useReducer, useRef, useState, type FormEvent } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { TypedChatText } from "@/components/TypedChatText";
import { CIRCLE_MINUTES, circleComingUp, circleNow, eventInAddress, MEMBER_ROOMS, SAMPLE_GOING, sampleGatherings, sampleHostStanding, type CircleEvent, type CircleOccurrence, type MemberRoomId } from "@/content/circle-events";
import { circle, people, PERSON_IDS, type CircleSeat, type PersonId } from "@/content/community-samples";
import { circleEventsStore, dateField, draftFrom, useCircleEvents, type EventDraft } from "@/lib/circle-events-store";
import { comingUpFor, hostedBy, NO_FILTERS } from "@/lib/circle-gatherings";
import { hostEligibility } from "@/lib/circle-host";
import { mergeGatherings, myEvents } from "@/lib/circle-listing";
import { canSee, communityHref, communityStore, friendList, isBlocked, useCommunity } from "@/lib/community-store";
import { CHIPS_ONLY, TABLES_OPEN_HOUR } from "@/lib/poker-night";
import { calendarPage, downloadIcs, googleCalendarUrl, nextMeeting, openCalendar, outlookCalendarUrl, type CircleMeeting } from "./circle-calendar";
import ComingUpView from "./circle/ComingUp";
import CreateEventView from "./circle/CreateEvent";
import LiveNow from "./circle/LiveNow";
import MemberCircle from "./circle/MemberCircle";
import MyEventsView from "./circle/MyEvents";
import NotEligibleView from "./circle/NotEligible";
import { circleHref, circlePlaceFrom, type CirclePlace, type CircleTab } from "./circle/shared";
import "./circle/circle-events.css";
import CircleScene from "./CircleScene";
import { useBursts, useLater, usePinnedToEnd } from "./hooks";
import { CalendarIcon, CheckIcon, CupIcon, DownloadIcon, HeartIcon, NextIcon, PauseIcon, PlayIcon, PlusIcon, PulseIcon } from "./icons";
import { AliraMark, Face, FloatingHearts, LiveDot, MyFace } from "./parts";

type Said = { id: number; who: CircleSeat; text: string };
type CircleState = { at: number; said: Said[]; waiting: boolean; next: number };
/** "advance" passes the teacup on, past `skip`: people the person has blocked or hidden. `lines` are today's event's. */
type CircleAction = { type: "advance"; seated: boolean; skip: CircleSeat[]; lines: CircleEvent["lines"] } | { type: "speak"; text: string };

/** The circle as it opens: Alira welcomes everyone to today's event. */
const opening = (event: CircleEvent): CircleState => ({ at: 0, said: [{ id: 0, who: "alira", text: event.lines.alira }], waiting: false, next: 1 });

/** The next one to hold the teacup. Your place is skipped until you have sat down, and so is anyone in `skip`. */
function nextSeat(at: number, seated: boolean, skip: CircleSeat[]): number {
  let index = at;
  for (let step = 0; step < circle.order.length; step++) {
    index = (index + 1) % circle.order.length;
    const who = circle.order[index];
    if ((who !== "you" || seated) && !skip.includes(who)) return index;
  }
  // Alira hosts and is never skipped, so the cup always finds her.
  return Math.max(0, circle.order.indexOf("alira"));
}

function goRound(state: CircleState, action: CircleAction): CircleState {
  if (action.type === "speak") {
    const line: Said = { id: state.next, who: "you", text: action.text };
    return { ...state, waiting: false, next: state.next + 1, said: [...state.said, line].slice(-30) };
  }
  const at = nextSeat(state.at, action.seated, action.skip);
  const who = circle.order[at];
  // When the cup reaches you, it waits for you.
  if (who === "you") return { ...state, at, waiting: true };
  return { ...state, at, waiting: false, next: state.next + 1, said: [...state.said, { id: state.next, who, text: action.lines[who] }].slice(-30) };
}

const nameOf = (who: CircleSeat) => (who === "alira" ? "Alira" : who === "you" ? "You" : people[who].name);
const isPerson = (who: CircleSeat): who is PersonId => who !== "alira" && who !== "you";
const COUNT_WORDS = ["No one", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
/** "Nine", for "Nine of us here". */
export const countWord = (count: number) => COUNT_WORDS[count] ?? String(count);

/** "Wednesday 14 October, 4 pm". */
const whenLabel = (date: Date) => `${date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}, ${date.getHours() % 12 || 12} ${date.getHours() < 12 ? "am" : "pm"}`;

/** Friday poker night sits in Coming up beside Alira's get-togethers: its tables open at 7 pm (poker-night.ts). */
const POKER_MINUTES = 120;
type Upcoming = { kind: "circle" | "poker"; id: string; start: Date; name: string; detail: string; theme: string; meeting: CircleMeeting };

/** The next poker night from `now`: this Friday at 7 pm, or next week's once tonight's tables have opened. */
export function pokerComingUp(now = new Date()): Upcoming {
  const start = nextMeeting({ day: 5, hour: TABLES_OPEN_HOUR }, now);
  return {
    kind: "poker", id: `poker-${dateField(start)}`, start, name: "Poker night", detail: CHIPS_ONLY, theme: "poker",
    meeting: { id: "poker-night", name: "Poker night, in My community", detail: CHIPS_ONLY, minutes: POKER_MINUTES, weekly: false },
  };
}

/** Alira's next get-togethers and the next poker night, soonest first. */
export function comingUpList(upcoming: CircleOccurrence[], now = new Date()): Upcoming[] {
  const circles: Upcoming[] = upcoming.map(item => ({
    kind: "circle", id: item.id, start: item.start, name: item.event.name, detail: item.event.detail, theme: item.event.id,
    meeting: { id: item.id, name: `${item.event.name}, in the Sunday circle`, detail: item.event.detail, minutes: CIRCLE_MINUTES, weekly: false },
  }));
  return [...circles, pokerComingUp(now)].sort((a, b) => a.start.getTime() - b.start.getTime());
}

/**
 * "Coming up": the next get-togethers (a new event every two days) and Friday's poker night, each on a little
 * calendar page in its own colour, with a reminder for the person's own calendar. Reminders for Alira's
 * get-togethers live with the rest of My community; poker night's with the circle's other events.
 */
function ComingUp({ upcoming, onSeeAll }: { upcoming: Upcoming[]; onSeeAll: () => void }) {
  const reminders = useCommunity().reminders;
  const eventReminders = useCircleEvents().reminders;
  const titleId = useId();
  return (
    <section className="cm-card cm-side-card cm-upcoming" aria-labelledby={titleId}>
      <h3 className="cm-side-title" id={titleId}>Coming up</h3>
      <ul className="cm-upcoming-list">
        {upcoming.map(item => {
          const on = item.kind === "poker" ? eventReminders.includes(item.id) : reminders.includes(item.id);
          const toggle = () => (item.kind === "poker" ? circleEventsStore.toggleReminder(item.id) : communityStore.toggleReminder(item.id));
          const page = calendarPage(item.start);
          const origin = typeof window === "undefined" ? "" : window.location.origin;
          return (
            <li key={item.id} className={on ? "is-on" : ""}>
              <div className="cm-upcoming-row">
                <span className="cm-date-page" data-theme={item.theme} aria-hidden="true"><span>{page.day}</span><b>{page.date}</b></span>
                <span className="cm-upcoming-text">
                  <b>{item.name}</b>
                  <span>{`${whenLabel(item.start)} · ${item.detail}`}</span>
                  {item.kind === "poker" && <Link className="cm-upcoming-link" href={communityHref("poker")}>See the tables<span className="cm-sr"> for poker night</span></Link>}
                </span>
                <button type="button" className={`cm-remind ${on ? "is-on" : ""}`} aria-pressed={on} onClick={toggle}>
                  {on ? <><CheckIcon size={14} />Reminded</> : "Remind me"}<span className="cm-sr">{` for ${item.name}`}</span>
                </button>
              </div>
              {on && (
                <div className="cm-calendar-row cm-pop" role="group" aria-label={`Add ${item.name} to your calendar`}>
                  <span className="cm-calendar-label"><CalendarIcon size={16} />Add to your calendar</span>
                  <button type="button" className="cm-calendar-button" onClick={() => openCalendar(googleCalendarUrl(item.meeting, item.start, origin))}>Google<span className="cm-sr"> Calendar, opens in a new tab</span></button>
                  <button type="button" className="cm-calendar-button" onClick={() => openCalendar(outlookCalendarUrl(item.meeting, item.start, origin))}>Outlook<span className="cm-sr">, opens in a new tab</span></button>
                  <button type="button" className="cm-calendar-button" onClick={() => downloadIcs(item.meeting, item.start)}><DownloadIcon size={14} />Apple and others<span className="cm-sr">: save a calendar file</span></button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <button type="button" className="cm-text-button" onClick={onSeeAll}>See everything coming up, members' events too</button>
    </section>
  );
}

/**
 * F2: the Sunday circle, a social get-together that changes every two days: a film night, a book club, football
 * together and more (circle-events.ts), each with its own lively scene behind the circle. A teacup goes round;
 * whoever holds it speaks, and their words show as live captions. Take your seat and it comes to you. Someone the
 * person has blocked is out of sight: their chair stands empty. Nobody blocked or hidden holds the teacup, and what
 * they said isn't shown.
 */
function LiveCircle({ active, heading, onSeeAll }: { active: boolean; heading: boolean; onSeeAll: () => void }) {
  const memory = useCommunity();
  const seated = memory.seated;
  // Today's event (or the one asked for: `?event=film`), and the ones coming up, as they are when the circle opens.
  const [today] = useState(() => circleNow(new Date(), eventInAddress()));
  const [upcoming] = useState(() => comingUpList(circleComingUp(new Date(), 3), new Date()));
  const event = today.event;
  const away = (who: CircleSeat) => isPerson(who) && isBlocked(memory, who);
  const heard = (who: CircleSeat) => !isPerson(who) || canSee(memory, who);
  const skip = circle.order.filter(who => !heard(who));
  // The teacup's timer reads who to skip as it is now.
  const skipNow = useRef(skip);
  skipNow.current = skip;
  const [state, dispatch] = useReducer(goRound, event, opening);
  const saidShown = state.said.filter(line => heard(line.who));
  const [held, setHeld] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [sharing, setSharing] = useState(false);
  const [words, setWords] = useState("");
  const { bursts, burst } = useBursts();
  const later = useLater();
  const warmSeen = useRef(0);
  const warmth = useRef<HTMLButtonElement>(null);
  const shareButton = useRef<HTMLButtonElement>(null);
  const firstChoice = useRef<HTMLButtonElement>(null);
  const { box, onScroll } = usePinnedToEnd<HTMLOListElement>(saidShown.length, active);
  // When the button that was pressed goes away, the focus moves to the one that takes its place.
  const focusSoon = (target: { current: HTMLElement | null }) => window.requestAnimationFrame(() => target.current?.focus());

  const speaker = circle.order[state.at];
  const upNext = circle.order[nextSeat(state.at, seated, skip)];
  const myTurn = seated && speaker === "you" && state.waiting;

  useEffect(() => {
    if (!active || state.waiting || held) return;
    const timer = window.setInterval(() => dispatch({ type: "advance", seated, skip: skipNow.current, lines: event.lines }), circle.everyMs);
    return () => window.clearInterval(timer);
  }, [active, state.waiting, held, seated, event]);

  // A little warmth floats up when some lines are said, and when you arrive having just sat down.
  useEffect(() => {
    const last = state.said[state.said.length - 1];
    if (last && last.id > warmSeen.current && circle.warmLines.includes(last.who)) { warmSeen.current = last.id; burst(); }
  }, [state.said, burst]);
  useEffect(() => { if (active && communityStore.justSeated()) burst(); }, [active, burst]);
  useEffect(() => { if (!myTurn) setSharing(false); }, [myTurn]);

  const sit = () => { communityStore.takeSeat(); burst(); focusSoon(warmth); };
  const speak = (text: string) => {
    const said = text.replace(/\s+/g, " ").trim().slice(0, 200);
    if (!said) return;
    dispatch({ type: "speak", text: said });
    setSharing(false);
    setWords("");
    burst();
    later(burst, 500);
    focusSoon(warmth);
  };
  const pass = () => { dispatch({ type: "advance", seated, skip, lines: event.lines }); focusSoon(warmth); };
  const share = (event: FormEvent) => { event.preventDefault(); speak(words); };

  const lastSaid = saidShown[saidShown.length - 1];
  const status = (who: CircleSeat) => {
    const doing = who === speaker ? "Speaking" : who === upNext ? "Up next" : "Listening";
    return who === "alira" ? (doing === "Listening" ? "Host" : `Host · ${doing.toLowerCase()}`) : doing;
  };

  return (
    <div className="cm-circle-view">
      <section className="cm-card cm-stage cm-stage-scene" data-theme={event.id} aria-labelledby="cm-circle-title">
        <CircleScene theme={event.id} />
        <span className="cm-stage-rings" aria-hidden="true"><i /><i /><i /></span>
        <div className="cm-stage-head">
          <div className="cm-stage-titles">
            <p className="cm-stage-live"><LiveDot /><span>Live</span></p>
            <h2 id="cm-circle-title" tabIndex={-1} data-view-heading={heading ? "" : undefined}>{event.name}</h2>
          </div>
          <div className="cm-topic">
            <p className="cm-topic-text">{event.topic}</p>
          </div>
        </div>
        <p className="cm-stage-rule"><CupIcon size={18} /><span>The teacup goes round. Whoever holds it speaks.</span></p>

        <ul className="cm-seats" aria-label="Who is in the circle">
          {circle.order.map(who => {
            if (away(who)) return <li key={who} className="cm-seat is-away" aria-hidden="true"><span className="cm-seat-ring"><span className="cm-seat-away" /></span></li>;
            const speaking = who === speaker && (who !== "you" || seated) && heard(who);
            const empty = who === "you" && !seated;
            const next = !speaking && who === upNext;
            return (
              <li key={who} className={`cm-seat ${speaking ? "is-speaking" : ""} ${next ? "is-next" : ""} ${empty ? "is-empty" : ""}`}>
                <span className="cm-seat-ring">
                  {speaking && <span className="cm-seat-speak" aria-hidden="true" />}
                  {who === "alira" ? <AliraMark size={56} className="cm-seat-face" />
                    : who === "you" ? (seated ? <MyFace size={56} className="cm-seat-face" />
                      : <button type="button" className="cm-empty-seat cm-seat-face" tabIndex={-1} aria-hidden="true" onClick={sit}><span className="cm-empty-plus"><PlusIcon size={22} strokeWidth={2} /></span></button>)
                      : <Face who={who} size={56} className="cm-seat-face" />}
                  {speaking && <span className="cm-seat-cup cm-pop" aria-hidden="true"><CupIcon size={14} strokeWidth={2.2} /></span>}
                </span>
                {empty ? (
                  <span className="cm-seat-name"><b>Your seat</b><span>Kept for you</span><span className="cm-sr">: an empty seat, kept for you</span></span>
                ) : (
                  <span className="cm-seat-name">
                    <b>{nameOf(who)}</b>
                    <span className="cm-seat-status">{status(who)}</span>
                    {speaking && <span className="cm-sr">{who === "you" ? " have the teacup" : " has the teacup"}</span>}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* What is said is written out for everyone in "Said in the circle" below; these captions are the same words, for the eye. */}
        {captions && lastSaid && (
          <div className="cm-captions" aria-hidden="true">
            <p className="cm-captions-label">{nameOf(lastSaid.who)}</p>
            <p key={lastSaid.id} className="cm-captions-text cm-pop">{lastSaid.who === "alira" ? <TypedChatText text={lastSaid.text} /> : lastSaid.text}</p>
          </div>
        )}
        <FloatingHearts bursts={bursts} className="cm-hearts-stage" />

        <div className="cm-stage-controls">
          {!seated && <button type="button" className="cm-btn cm-btn-rust cm-btn-glow" onClick={sit}>Take your seat</button>}
          {myTurn && !sharing && (
            <div className="cm-turn cm-pop">
              <span className="cm-turn-label">You have the teacup</span>
              <button type="button" className="cm-quick cm-quick-mint" onClick={() => speak(circle.hello)}>Say hello</button>
              <button ref={shareButton} type="button" className="cm-quick cm-quick-amber" onClick={() => { setSharing(true); focusSoon(firstChoice); }}>Have your say</button>
              <button type="button" className="cm-quick cm-quick-plain" onClick={pass}>Pass the cup</button>
            </div>
          )}
          {myTurn && sharing && (
            <form className="cm-turn cm-share cm-pop" onSubmit={share}>
              <span className="cm-turn-label">{event.shareLabel}</span>
              <span className="cm-share-choices">
                {event.shareChoices.map((choice, index) => <button key={choice} ref={index === 0 ? firstChoice : undefined} type="button" className="cm-quick cm-quick-amber" onClick={() => speak(choice)}>{choice.replace(/\.$/, "")}</button>)}
              </span>
              <span className="cm-share-own">
                <label className="cm-chat-field"><span className="cm-sr">Or say it in your own words</span><input type="text" value={words} maxLength={200} placeholder="Or in your own words" autoComplete="off" onChange={event => setWords(event.target.value)} /></label>
                <button type="submit" className="cm-quick cm-quick-mint">Say it</button>
                <button type="button" className="cm-quick cm-quick-plain" onClick={() => { setSharing(false); focusSoon(shareButton); }}>Back</button>
              </span>
            </form>
          )}
          {seated && !myTurn && <button ref={warmth} type="button" className="cm-stage-button is-warm" onClick={burst}><HeartIcon size={18} fill="#E8795A" stroke="#E8795A" strokeWidth={1.6} /><span>Send warmth</span></button>}
          <button type="button" className={`cm-stage-button ${captions ? "is-on" : ""}`} aria-pressed={captions} onClick={() => setCaptions(!captions)}>{captions ? "Captions on" : "Captions off"}</button>
          <button type="button" className="cm-stage-button" onClick={() => setHeld(!held)}>
            {held ? <PlayIcon size={14} /> : <PauseIcon size={14} />}<span>{held ? "Let it go round" : "Pause the teacup"}</span>
          </button>
          {!myTurn && <button type="button" className="cm-stage-button" onClick={pass}><span>Next speaker</span><NextIcon size={16} /></button>}
          <Link className="cm-stage-button" href={communityHref()} onClick={() => communityStore.leaveSeat()}>Leave quietly</Link>
          <p className="cm-sr" role="status">{myTurn ? "You have the teacup. Say hello, have your say, or pass the cup." : ""}</p>
        </div>
      </section>

      <div className="cm-circle-bottom">
        <section className="cm-card cm-said" aria-labelledby="cm-said-title">
          <h3 className="cm-side-title" id="cm-said-title">Said in the circle</h3>
          <ol className="cm-said-list" ref={box} onScroll={onScroll} tabIndex={0} aria-label="What has been said">
            {saidShown.map(line => (
              <li key={line.id} className="cm-said-line cm-msg-in">
                {line.who === "alira" ? <span className="cm-said-alira" aria-hidden="true"><PulseIcon size={16} /></span>
                  : line.who === "you" ? <MyFace size={32} /> : <Face who={line.who} size={32} />}
                <div className="cm-said-text">
                  <strong>{nameOf(line.who)}</strong>
                  {line.who === "alira" ? <TypedChatText text={line.text} /> : <span>{line.text}</span>}
                </div>
              </li>
            ))}
          </ol>
        </section>
        <ComingUp upcoming={upcoming} onSeeAll={onSeeAll} />
      </div>
    </div>
  );
}

/**
 * The Sunday circle, with its own pages under the tab (the address says which, as `tab=`): Live now (Alira's
 * circle above, and the circles members host on now), Coming up (every get-together the person may see, with
 * filters), My events (host standing, what they host, invitations and going) and Create an event (or, without
 * host standing yet, what's left and what they can do meanwhile). `host=new` previews a newer member.
 */
export default function CircleView({ active, name }: { active: boolean; name: string }) {
  const search = useSearch();
  const [, navigate] = useLocation();
  // The Friends drawer opening over the circle has its own `tab`: the circle stays on the page it was on.
  const drawerOpen = new URLSearchParams(search).has("panel");
  const [place, setPlace] = useState<CirclePlace>(() => circlePlaceFrom(drawerOpen ? "" : search));
  useEffect(() => { if (!drawerOpen) setPlace(circlePlaceFrom(search)); }, [search, drawerOpen]);
  const community = useCommunity();
  const memory = useCircleEvents();
  const [samples] = useState(() => sampleGatherings(new Date()));
  const [now, setNow] = useState(() => Date.now());
  const [notice, setNotice] = useState("");
  const [editing, setEditing] = useState<{ key: number; draft: EventDraft | null }>({ key: 0, draft: null });
  const main = useRef<HTMLDivElement>(null);

  // Times move on (what is live, what has passed) while the page is open.
  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, [active]);
  useEffect(() => { if (place.tab !== "mine") setNotice(""); }, [place.tab]);

  const friends = friendList(community).map(friend => friend.who);
  const hidden = PERSON_IDS.filter(who => isBlocked(community, who));
  const events = mergeGatherings(samples, memory);
  const lastPost = community.posts.reduce<number | null>((latest, post) => (latest === null || post.createdAt > latest ? post.createdAt : latest), null);
  const standing = sampleHostStanding(now, place.isNew, lastPost);
  const eligibility = hostEligibility(standing, now);
  const hostedStarts = events.filter(event => hostedBy(event, "you")).map(event => ({ id: event.id, start: event.start }));
  const comingCount = comingUpFor(events, "you", NO_FILTERS, friends, now, hidden).length;
  const waiting = myEvents(events, memory, SAMPLE_GOING, now, hidden).waiting.length;

  const go =(tab: CircleTab, room: MemberRoomId | null = null) => {
    navigate(circleHref(tab, { room, isNew: place.isNew }));
    // The page's heading takes the focus once the new page is drawn, if what was pressed has gone.
    window.requestAnimationFrame(() => {
      const focused = document.activeElement as HTMLElement | null;
      if (!focused || focused === document.body || !focused.isConnected || !focused.getClientRects().length) main.current?.querySelector<HTMLElement>("[data-view-heading]")?.focus({ preventScroll: true });
    });
  };
  const create = (draft: EventDraft | null) => { setEditing(current => ({ key: current.key + 1, draft })); go("create"); };
  const openOwn = () => go("live", "crossword");
  const tabs: { id: CircleTab; label: string; count?: number }[] = [{ id: "live", label: "Live now" }, { id: "coming", label: "Coming up", count: comingCount }, { id: "mine", label: "My events", count: waiting || undefined }];

  return (
    <div className="cm-ce" ref={main}>
      <div className="cm-ce-nav">
        <nav className="cm-ce-tabs" aria-label="Sunday circle">
          {tabs.map(tab => (
            <button key={tab.id} type="button" className={`cm-ce-tab ${place.tab === tab.id ? "is-on" : ""}`} aria-current={place.tab === tab.id ? "page" : undefined} onClick={() => go(tab.id)}>
              {tab.id === "live" && <LiveDot />}{tab.label}{tab.count !== undefined && <span className="cm-ce-tab-count">{tab.count}<span className="cm-sr">{tab.id === "mine" ? " waiting for your answer" : " get-togethers"}</span></span>}
            </button>
          ))}
        </nav>
        <button type="button" className={`cm-btn cm-btn-rust cm-ce-create-button ${place.tab === "create" ? "is-on" : ""}`} aria-current={place.tab === "create" ? "page" : undefined} onClick={() => create(null)}>
          <PlusIcon size={16} />Create an event
        </button>
      </div>

      <div hidden={place.tab !== "live" || place.room !== null}>
        <LiveNow onOpen={room => go("live", room)} />
        <LiveCircle active={active && place.tab === "live" && place.room === null} heading={place.tab === "live" && place.room === null} onSeeAll={() => go("coming")} />
      </div>
      {place.tab === "live" && place.room && <MemberCircle key={place.room} room={MEMBER_ROOMS[place.room]} active={active} onLeave={() => go("live")} />}
      {place.tab === "coming" && (
        <ComingUpView events={events} friends={friends} hidden={hidden} now={now} onOpenOwn={openOwn} heading />
      )}
      {place.tab === "mine" && (
        <MyEventsView events={events} friends={friends} hidden={hidden} eligibility={eligibility} standing={standing} now={now} notice={notice}
          onCreate={() => create(null)} onEdit={event => create(draftFrom(event))} onOpenOwn={openOwn} heading />
      )}
      {place.tab === "create" && (eligibility.eligible ? (
        <CreateEventView key={editing.key} initial={editing.draft ?? memory.draft} standing={standing} hostedStarts={hostedStarts} friends={friends} now={now}
          onBack={() => go("coming")} heading
          onCreated={(event, invited) => {
            setEditing(current => ({ key: current.key + 1, draft: null }));
            go("mine");
            setNotice(editing.draft?.editing ? `Saved your changes to ${event.name}.` : invited ? `${event.name} is made, and ${invited} friend${invited === 1 ? " is" : "s are"} invited. Nobody else can see it.` : `${event.name} is in Coming up.`);
          }} />
      ) : (
        <NotEligibleView name={name} eligibility={eligibility} standing={standing} friends={friends} now={now} onBack={() => go("coming")} heading
          onSeeSettled={() => navigate(circleHref("create"))} />
      ))}
    </div>
  );
}
