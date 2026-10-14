import { useEffect, useId, useReducer, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { TypedChatText } from "@/components/TypedChatText";
import { circleGuests, type CircleGuestId, type MemberRoom, type RoomSeat } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { circleEventsStore, dateField, roomToday, useCircleEvents } from "@/lib/circle-events-store";
import { canAskCircle, castVote, clockLeft, reasonLabel, replyToVote, startVote, VOTE_REASONS, voteOutcome, votePhase, voteTally, type CircleVote, type VoteChoice, type VoteOutcome, type VoteReason } from "@/lib/circle-vote";
import { isBlocked, useCommunity } from "@/lib/community-store";
import CommunityDialog from "../dialog";
import { usePinnedToEnd } from "../hooks";
import { ArrowIcon, ClockIcon, CupIcon, FlagIcon, PauseIcon, PlayIcon, PlusIcon, PulseIcon, ShieldIcon, SpeakerIcon, UsersIcon } from "../icons";
import { AliraMark, Face, LiveDot, MyFace } from "../parts";
import { countWords } from "./shared";

// A circle a member hosts, live, with Alira sitting in as a helper. The teacup goes round as in Alira's
// circle. The host can pass the teacup to someone, mute someone until the next speaker, report them, or
// ask the circle whether they should leave (circle-vote.ts has the rules: never in Alira's circles, never
// by the host alone, once per person per circle). Everyone but that person then gets a private vote.
// Rob, a newer member, keeps speaking over whoever has the teacup, so the vote can be seen.

type Line = { id: number; who: RoomSeat; text: string; over?: boolean };
type RoomState = { speaker: RoomSeat; said: Line[]; next: number; tick: number; overs: number; muted: RoomSeat | null };
type RoomAction =
  | { type: "tick"; order: RoomSeat[]; room: MemberRoom; robHere: boolean }
  | { type: "pass"; to: RoomSeat | null; order: RoomSeat[]; room: MemberRoom }
  | { type: "alira"; text: string }
  | { type: "mute"; who: RoomSeat };

const isGuest = (who: RoomSeat): who is CircleGuestId => who in circleGuests;
const isPerson = (who: RoomSeat): who is PersonId => who !== "alira" && who !== "you" && !isGuest(who);
const nameOf = (who: RoomSeat) => (who === "alira" ? "Alira" : who === "you" ? "You" : isGuest(who) ? circleGuests[who].name : people[who].name);

function opening(room: MemberRoom): RoomState {
  const first: RoomSeat = room.lines.alira ? "alira" : room.host;
  return { speaker: first, said: [{ id: 0, who: first, text: room.lines[first] ?? "" }], next: 1, tick: 0, overs: 0, muted: null };
}

const add = (state: RoomState, lines: Omit<Line, "id">[]): Pick<RoomState, "said" | "next"> => ({
  said: [...state.said, ...lines.map((line, index) => ({ ...line, id: state.next + index }))].slice(-30),
  next: state.next + lines.length,
});

function passTo(state: RoomState, to: RoomSeat | null, order: RoomSeat[], room: MemberRoom): RoomState {
  const at = order.indexOf(state.speaker);
  const who = to ?? order[(at + 1) % order.length];
  if (!who) return state;
  const text = room.lines[who];
  return { ...state, ...(text ? add(state, [{ who, text }]) : {}), speaker: who, muted: null };
}

function roomStep(state: RoomState, action: RoomAction): RoomState {
  switch (action.type) {
    case "tick": {
      const tick = state.tick + 1;
      // Every other turn, Rob speaks over whoever holds the teacup, and Alira reminds him gently.
      if (tick % 2 === 1 && action.robHere && state.overs < action.room.over.length && state.speaker !== "rob" && state.muted !== "rob") {
        const nudge = `Rob, the teacup's with ${state.speaker === "you" ? "our host" : nameOf(state.speaker)} just now. Yours is coming.`;
        return { ...state, tick, overs: state.overs + 1, ...add(state, [{ who: "rob", text: action.room.over[state.overs], over: true }, { who: "alira", text: nudge }]) };
      }
      return { ...passTo(state, null, action.order, action.room), tick };
    }
    case "pass": return passTo(state, action.to, action.order, action.room);
    case "alira": return { ...state, ...add(state, [{ who: "alira", text: action.text }]) };
    case "mute": return { ...state, muted: action.who };
  }
}

/** A face for any seat: Alira's mark, the person's own, an example person's, or a guest's initial. */
function SeatFace({ who, size }: { who: RoomSeat; size: number }) {
  if (who === "alira") return <AliraMark size={size} className="cm-seat-face" />;
  if (who === "you") return <MyFace size={size} className="cm-seat-face" />;
  if (isGuest(who)) {
    const guest = circleGuests[who];
    return <span className="cm-face cm-face-initial cm-seat-face" style={{ width: size, height: size, fontSize: Math.round(size * 0.38), fontWeight: 700, backgroundColor: guest.tint, color: guest.ink }} aria-hidden="true">{guest.initial}</span>;
  }
  return <Face who={who} size={size} className="cm-seat-face" />;
}

function SmallFace({ who, size = 32 }: { who: RoomSeat; size?: number }) {
  if (who === "alira") return <span className="cm-said-alira" aria-hidden="true"><PulseIcon size={16} /></span>;
  if (who === "you") return <MyFace size={size} />;
  if (isGuest(who)) {
    const guest = circleGuests[who];
    return <span className="cm-face cm-face-initial" style={{ width: size, height: size, fontSize: Math.round(size * 0.4), fontWeight: 700, backgroundColor: guest.tint, color: guest.ink }} aria-hidden="true">{guest.initial}</span>;
  }
  return <Face who={who} size={size} />;
}

/** How each of the others would vote, in this preview. About Rob, as the room says; about anyone else, mostly no. */
function sampleBallot(room: MemberRoom, voter: RoomSeat, target: RoomSeat, index: number): VoteChoice {
  if (target === "rob") return room.ballots[voter] ?? "no";
  return index === 0 ? "pass" : "no";
}

/** The seat menu the host opens on someone: pass the teacup, mute, ask the circle, report. */
function SeatMenu({ who, overs, asked, voting, onPass, onMute, onAsk, onReport, onClose }: {
  who: RoomSeat; overs: number; asked: boolean; voting: boolean;
  onPass: () => void; onMute: () => void; onAsk: () => void; onReport: () => void; onClose: () => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const name = nameOf(who);
  useEffect(() => {
    box.current?.querySelector<HTMLElement>('[role="menuitem"]:not([disabled])')?.focus();
    const away = (event: MouseEvent) => { if (box.current && !box.current.contains(event.target as Node) && !(event.target as HTMLElement).closest?.("[data-seat-button]")) onClose(); };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, [onClose]);
  const onKeyDown = (event: KeyboardEvent) => {
    const items = Array.from(box.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])') ?? []);
    const at = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === "Escape") { event.preventDefault(); onClose(); }
    else if (event.key === "ArrowDown") { event.preventDefault(); items[(at + 1) % items.length]?.focus(); }
    else if (event.key === "ArrowUp") { event.preventDefault(); items[(at - 1 + items.length) % items.length]?.focus(); }
    else if (event.key === "Tab") onClose();
  };
  return (
    <div ref={box} className="cm-ce-menu cm-pop" role="menu" aria-label={`Options for ${name}`} onKeyDown={onKeyDown}>
      <div className="cm-ce-menu-head">
        <SmallFace who={who} size={34} />
        <span><b>{name}</b><span>{isGuest(who) ? circleGuests[who].about : isPerson(who) ? people[who].about : ""}</span></span>
      </div>
      {who === "rob" && overs > 0 && <p className="cm-ce-menu-note"><ClockIcon size={14} />{`Alira noticed ${name} has spoken over the teacup holder ${overs === 1 ? "once" : `${overs} times`}.`}</p>}
      <button type="button" role="menuitem" onClick={onPass}><ArrowIcon size={16} />{`Pass the teacup to ${name}`}</button>
      <button type="button" role="menuitem" onClick={onMute}><SpeakerIcon size={16} />{`Mute ${name} until the next speaker`}</button>
      <button type="button" role="menuitem" className="is-warm" disabled={asked || voting} onClick={onAsk}>
        <UsersIcon size={16} />{asked ? `The circle has already been asked about ${name}` : voting ? "A vote is already open" : `Ask the circle: should ${name} leave?`}
      </button>
      <button type="button" role="menuitem" className="is-red" onClick={onReport}><FlagIcon size={16} />{`Report ${name} to Safety`}</button>
    </div>
  );
}

/** Before a vote opens: the reason everyone will see, and whether the person gets 30 seconds to reply. */
function AskDialog({ who, returnTo, onStart, onMute, onClose }: { who: RoomSeat; returnTo: HTMLElement | null; onStart: (reason: VoteReason, reply: boolean) => void; onMute: () => void; onClose: () => void }) {
  const [reason, setReason] = useState<VoteReason>("talking");
  const [reply, setReply] = useState(true);
  const titleId = useId();
  const name = nameOf(who);
  const start = (event: FormEvent) => { event.preventDefault(); onStart(reason, reply); };
  return createPortal(
    <div className="cm-layer">
      <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} returnFocus={returnTo} className="cm-ce-ask">
        <form onSubmit={start} className="cm-ce-ask-form">
          <div>
            <h2 id={titleId} className="cm-ce-ask-title">{`Ask the circle whether ${name} should leave?`}</h2>
            <p className="cm-ce-ask-text">{`Everyone here except ${name} gets one vote. It stays open for `}<strong>2 minutes</strong>{`. If more than half of those who vote say yes, ${name} leaves this circle and can't rejoin it today. ${name} sees the vote too, and can say a few words first.`}</p>
          </div>
          <fieldset className="cm-ce-reasons">
            <legend className="cm-ce-label">Why? · shown to the circle</legend>
            {VOTE_REASONS.map(item => (
              <label key={item.id} className={`cm-ce-reason ${reason === item.id ? "is-on" : ""}`}>
                <input type="radio" name="cm-ce-reason" checked={reason === item.id} onChange={() => setReason(item.id)} />{item.label}
              </label>
            ))}
          </fieldset>
          <label className="cm-ce-check"><input type="checkbox" checked={reply} onChange={event => setReply(event.target.checked)} /><span>{`Give ${name} 30 seconds to reply before voting opens`}</span></label>
          <div className="cm-ce-ask-actions">
            <button type="submit" className="cm-btn cm-btn-rust cm-btn-wide" data-autofocus>Start the vote</button>
            <div>
              <button type="button" className="cm-btn cm-btn-quiet" onClick={onMute}>{`Just mute ${name} instead`}</button>
              <button type="button" className="cm-btn cm-btn-quiet" onClick={onClose}>Cancel</button>
            </div>
          </div>
          <p className="cm-ce-hint"><ShieldIcon size={14} /><span>A host can never remove someone alone, and can only ask once per person per circle. If anyone is unsafe, Alira can end things straight away.</span></p>
        </form>
      </CommunityDialog>
    </div>,
    document.body,
  );
}

/** The vote, as everyone but the person asked about sees it: the reason, their reply, the buttons, the timer and the tally. */
function VoteBanner({ vote, now, outcome, onVote, onDone }: { vote: CircleVote; now: number; outcome: VoteOutcome | null; onVote: (choice: VoteChoice) => void; onDone: () => void }) {
  const phase = votePhase(vote, now);
  const tally = voteTally(vote);
  const target = vote.target as RoomSeat;
  const asked = vote.host as RoomSeat;
  const name = nameOf(target);
  const mine = vote.ballots.you;
  const asker = asked === "you" ? "You asked the circle" : `${nameOf(asked)}, your host, asked the circle`;
  const share = (count: number) => `${vote.voters.length ? Math.round((count / vote.voters.length) * 100) : 0}%`;
  return (
    <div className="cm-ce-vote cm-pop" role="region" aria-label="Vote in progress">
      <div className="cm-ce-vote-head">
        <div className="cm-ce-vote-who">
          <SmallFace who={asked} size={40} />
          <div>
            <p className="cm-ce-vote-kicker">{asker}</p>
            <h3 id="cm-ce-vote-title" tabIndex={-1}>{`Should ${name} leave this circle?`}</h3>
            <p className="cm-ce-sub">{`Reason given: ${reasonLabel(vote.reason).toLowerCase()}`}{vote.reply ? ` · ${name} has replied` : vote.opensAt > vote.startedAt ? ` · ${name} can reply first` : ""}</p>
          </div>
        </div>
        {phase !== "closed" && (
          <span className="cm-ce-timer"><ClockIcon size={16} />{phase === "reply" ? `Voting opens in ${clockLeft(vote.opensAt - now)}` : `${clockLeft(vote.endsAt - now)} left`}</span>
        )}
      </div>

      {vote.reply && (
        <div className="cm-ce-vote-reply"><SmallFace who={target} size={32} /><p><b>{`${name} replied: `}</b>{`"${vote.reply}"`}</p></div>
      )}

      {phase === "closed" && outcome ? (
        <div className={`cm-ce-result is-${outcome}`}>
          <p className="cm-ce-result-title">{outcome === "leaves" ? `More than half said yes. ${name} has left the circle.` : outcome === "stays" ? `Half or fewer said yes. ${name} stays.` : `${name} left before the vote closed.`}</p>
          <p>{outcome === "leaves" ? `${name} can't rejoin this circle today. Their seat stays empty, and the vote isn't mentioned again.` : outcome === "stays" ? `Nobody can ask the circle about ${name} again today. ${vote.host === "you" ? "You" : "The host"} can still mute ${name} until the next speaker.` : "There's no result."}</p>
          <p className="cm-ce-sub">The Safety team has a note of the reason and the result.</p>
          <button type="button" className="cm-ce-button is-green" onClick={onDone}>Carry on</button>
        </div>
      ) : (
        <>
          <div className="cm-ce-vote-buttons">
            {mine ? <p className="cm-ce-voted" role="status">Thank you. Your vote is in.</p> : (
              <>
                <button type="button" className="cm-btn cm-btn-rust" disabled={phase !== "open"} onClick={() => onVote("yes")}>{`Yes, ${name} should leave`}</button>
                <button type="button" className="cm-btn cm-btn-green" disabled={phase !== "open"} onClick={() => onVote("no")}>{`No, ${name} should stay`}</button>
                <button type="button" className="cm-btn cm-btn-quiet" disabled={phase !== "open"} onClick={() => onVote("pass")}>I'd rather not say</button>
              </>
            )}
          </div>
          <div className="cm-ce-tally">
            <p><span><strong className="is-yes">{`${tally.yes} yes`}</strong>{" · "}<strong className="is-no">{`${tally.no} no`}</strong>{tally.pass ? ` · ${tally.pass} rather not say` : ""}{` · ${tally.waiting} haven't voted yet`}</span><span>{`Needs more than half of those who vote · ${name} can't vote`}</span></p>
            <span className="cm-ce-tally-bar" aria-hidden="true"><i className="is-yes" style={{ width: share(tally.yes) }} /><i className="is-no" style={{ width: share(tally.no) }} /></span>
            <p className="cm-ce-hint">Your vote is private. Only the result is shown, and nothing about this vote is kept in Said in the circle.</p>
          </div>
        </>
      )}
      <p className="cm-sr" role="status">{phase === "open" && !mine ? "Voting is open." : ""}</p>
    </div>
  );
}

/**
 * A member-hosted circle, live: a deep teal room, so it is told apart from Alira's at a glance. The host
 * (`room.host`, perhaps the person) leads; Alira sits in to help. As a member, the person listens and votes.
 */
export default function MemberCircle({ room, active, onLeave }: { room: MemberRoom; active: boolean; onLeave: () => void }) {
  const community = useCommunity();
  const memory = useCircleEvents();
  const [day] = useState(() => dateField(new Date()));
  const today = roomToday(memory, room.id, day);
  const amHost = room.host === "you";
  const away = (who: RoomSeat) => isPerson(who) && isBlocked(community, who);
  const gone = (who: RoomSeat) => today.removed.includes(who) || away(who);
  const present = room.seats.filter(who => who !== "alira" && !gone(who));
  const order = present.filter(who => !!room.lines[who]);
  const [state, dispatch] = useReducer(roomStep, room, opening);
  const [held, setHeld] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [vote, setVote] = useState<CircleVote | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [menuFor, setMenuFor] = useState<RoomSeat | null>(null);
  const [askFor, setAskFor] = useState<RoomSeat | null>(null);
  const [notice, setNotice] = useState("");
  const seatButtons = useRef<Partial<Record<RoomSeat, HTMLButtonElement | null>>>({});
  const settled = useRef<CircleVote | null>(null);
  const { box, onScroll } = usePinnedToEnd<HTMLOListElement>(state.said.length, active);
  const orderNow = useRef(order);
  orderNow.current = order;
  const robHere = present.includes("rob");
  const phase = vote ? votePhase(vote, now) : null;
  const outcome = vote ? voteOutcome(vote, now) : null;
  const voting = phase === "reply" || phase === "open";

  // The teacup goes round, paused while the host holds it and while the circle votes.
  useEffect(() => {
    if (!active || held || vote) return;
    const timer = window.setInterval(() => dispatch({ type: "tick", order: orderNow.current, room, robHere }), 3600);
    return () => window.clearInterval(timer);
  }, [active, held, vote, room, robHere]);

  // In Anne's circle, Anne asks the circle about Rob once he has spoken over people three times.
  useEffect(() => {
    if (amHost || vote || !active || state.overs < room.over.length || !robHere || today.asked.includes("rob")) return;
    const timer = window.setTimeout(() => {
      const started = startVote({ hostedBy: "member", host: room.host, present, asked: today.asked }, room.host, "rob", "talking", Date.now(), true);
      if (!started) return;
      circleEventsStore.askedAbout(room.id, "rob", day);
      setNow(Date.now());
      setVote(started);
    }, 2500);
    return () => window.clearTimeout(timer);
    // `present` and `today` are read as they are when Rob's third interruption lands.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amHost, vote, active, state.overs, room, robHere, day]);

  // While a vote runs: the clock, the reply, and the others' votes as they come in (in this preview).
  useEffect(() => {
    if (!vote || phase === "closed") return;
    const timer = window.setInterval(() => {
      const at = Date.now();
      setNow(at);
      setVote(current => {
        if (!current) return current;
        let next = current;
        if (votePhase(next, at) === "reply" && next.reply === null && at >= next.startedAt + 5000) next = replyToVote(next, next.target === "rob" ? room.reply : "I'm sorry if I upset anyone.", at);
        next.voters.filter(who => who !== "you").forEach((who, index) => {
          if (at >= next.opensAt + 2500 + index * 2600) next = castVote(next, who, sampleBallot(room, who as RoomSeat, next.target as RoomSeat, index), at);
        });
        return next;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [vote, phase, room]);

  // When the vote closes: if more than half said yes, the person leaves and can't come back today, and Alira says so.
  useEffect(() => {
    if (!vote || !outcome || settled.current === vote) return;
    settled.current = vote;
    if (outcome === "leaves") {
      circleEventsStore.removed(room.id, vote.target, day);
      dispatch({ type: "alira", text: `${nameOf(vote.target as RoomSeat)} has left the circle. Let's carry on.` });
      if (state.speaker === vote.target) dispatch({ type: "pass", to: null, order: orderNow.current.filter(who => who !== vote.target), room });
    }
  }, [vote, outcome, room, day, state.speaker]);

  const pass = (to: RoomSeat | null = null) => { dispatch({ type: "pass", to, order, room }); setMenuFor(null); };
  const mute = (who: RoomSeat) => { dispatch({ type: "mute", who }); setMenuFor(null); setAskFor(null); setNotice(`${nameOf(who)} is muted until the next speaker.`); };
  const report = (who: RoomSeat) => { setMenuFor(null); setNotice(`Thank you. The Safety team will look at what happened with ${nameOf(who)}. Nobody here is told who reported it.`); };
  const ask = (who: RoomSeat, reason: VoteReason, reply: boolean) => {
    const started = startVote({ hostedBy: "member", host: room.host, present, asked: today.asked }, "you", who, reason, Date.now(), reply);
    setAskFor(null);
    if (!started) return;
    circleEventsStore.askedAbout(room.id, who, day);
    setNow(Date.now());
    setVote(started);
    // After the dialog has handed the focus back, it moves on to the vote that has just opened.
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => document.getElementById("cm-ce-vote-title")?.focus()));
  };
  const lastSaid = state.said[state.said.length - 1];
  const host = room.host;
  const speakerName = state.speaker === "you" ? "You have" : `${nameOf(state.speaker)} has`;

  const status = (who: RoomSeat): { text: string; tone?: "gold" | "warm" } => {
    if (vote && phase !== "closed") {
      if (who === "alira") return { text: "Doesn't vote" };
      if (who === vote.target) return { text: "Being voted on", tone: "gold" };
      const voted = !!vote.ballots[who];
      if (who === "you") return { text: voted ? (amHost ? "Host · voted" : "Voted") : "Your vote", tone: "warm" };
      return { text: `${who === host ? "Host · " : ""}${voted ? "Voted" : "Thinking"}` };
    }
    if (who === "alira") return { text: "Helper" };
    if (who === "you" && amHost) return { text: "Host" };
    if (who === state.muted) return { text: "Muted" };
    if (who === state.speaker) return { text: who === host ? "Host · speaking" : "Speaking", tone: "warm" };
    if (who === "rob" && state.overs > 0) return { text: `Talking over · ${state.overs}`, tone: "gold" };
    if (who === host) return { text: "Host" };
    return { text: who === "you" ? "You · listening" : "Listening" };
  };

  return (
    <div className="cm-circle-view cm-ce-member">
      <div className="cm-ce-topline">
        <p className="cm-ce-crumbs"><button type="button" className="cm-ce-crumb" onClick={onLeave}>Sunday circle</button><span aria-hidden="true">›</span><span>{room.name}</span></p>
        <span className="cm-ce-pill">{amHost ? <><MyFace size={22} />You're hosting · Alira is helping</> : <><MyFace size={22} />You're in the circle, listening</>}</span>
      </div>

      <section className="cm-ce-room"aria-labelledby="cm-ce-room-title">
        {vote && (
          <VoteBanner vote={vote} now={now} outcome={outcome} onVote={choice => { setNow(Date.now()); setVote(current => (current ? castVote(current, "you", choice, Date.now()) : current)); }} onDone={() => { setVote(null); setNotice(""); window.requestAnimationFrame(() => document.getElementById("cm-ce-room-title")?.focus()); }} />
        )}
        <div className="cm-ce-room-head">
          <div>
            <p className="cm-ce-room-kicker"><LiveDot />{voting ? "Live · teacup paused while the circle votes" : `Live · hosted by ${amHost ? "you" : nameOf(host)} · Alira helping`}</p>
            <span className="cm-ce-room-label">{room.label}</span>
            <h2 id="cm-ce-room-title" tabIndex={-1} data-view-heading>{room.name}</h2>
            <p className="cm-ce-room-sub">{`${countWords(present.length)} of us here. ${speakerName} the teacup.`}</p>
          </div>
          <div className="cm-ce-room-question">
            <p className="cm-ce-room-kicker">Today's question</p>
            <p>{room.question}</p>
          </div>
        </div>

        <ul className="cm-ce-room-seats" aria-label="Who is in the circle">
          {room.seats.map(who => {
            if (gone(who)) return <li key={who} className="cm-seat is-away" aria-hidden="true"><span className="cm-seat-ring"><span className="cm-seat-away" /></span></li>;
            const speaking = who === state.speaker && !voting;
            const { text, tone } = status(who);
            const canOpen = amHost && who !== "you" && who !== "alira";
            const face = <><SeatFace who={who} size={64} />{speaking && <span className="cm-seat-cup cm-pop" aria-hidden="true"><CupIcon size={14} strokeWidth={2.2} /></span>}</>;
            return (
              <li key={who} className={`cm-seat ${speaking ? "is-speaking" : ""} ${tone ? `is-${tone}` : ""} ${vote && who === vote.target && voting ? "is-target" : ""}`}>
                {canOpen ? (
                  <button ref={element => { seatButtons.current[who] = element; }} type="button" className="cm-seat-ring cm-ce-seat-button" data-seat-button aria-haspopup="menu" aria-expanded={menuFor === who}
                    onClick={() => setMenuFor(menuFor === who ? null : who)}>
                    {face}<span className="cm-sr">{`Options for ${nameOf(who)}`}</span>
                  </button>
                ) : <span className="cm-seat-ring">{face}</span>}
                <span className="cm-seat-name"><b>{nameOf(who)}</b><span className="cm-seat-status">{text}</span>{speaking && <span className="cm-sr">{who === "you" ? " have the teacup" : " has the teacup"}</span>}</span>
                {menuFor === who && (
                  <SeatMenu who={who} overs={state.overs} asked={!canAskCircle({ hostedBy: "member", host: room.host, present, asked: today.asked }, "you", who).ok} voting={!!vote}
                    onPass={() => pass(who)} onMute={() => mute(who)} onAsk={() => { setMenuFor(null); setAskFor(who); }} onReport={() => report(who)}
                    onClose={() => { setMenuFor(null); seatButtons.current[who]?.focus(); }} />
                )}
              </li>
            );
          })}
          {room.freeSeats > 0 && (
            <li className="cm-seat is-free" aria-hidden="true"><span className="cm-seat-ring"><span className="cm-ce-free"><PlusIcon size={20} /></span></span><span className="cm-seat-name"><b>{`${room.freeSeats} seat${room.freeSeats === 1 ? "" : "s"}`}</b><span>free</span></span></li>
          )}
        </ul>

        {captions && lastSaid && (
          <div className="cm-ce-captions" aria-hidden="true">
            <p className="cm-captions-label">{`Live captions · ${nameOf(lastSaid.who)}`}</p>
            <p key={lastSaid.id} className="cm-captions-text cm-pop">{lastSaid.who === "alira" ? <TypedChatText text={lastSaid.text} /> : lastSaid.text}</p>
          </div>
        )}

        <div className="cm-ce-room-controls">
          {amHost && <button type="button" className="cm-btn cm-btn-rust" disabled={voting} onClick={() => pass()}>Pass the teacup</button>}
          <button type="button" className={`cm-ce-room-button ${captions ? "is-on" : ""}`} aria-pressed={captions} onClick={() => setCaptions(!captions)}>{captions ? "Captions on" : "Captions off"}</button>
          {amHost && (
            <button type="button" className="cm-ce-room-button" disabled={voting} onClick={() => setHeld(!held)}>
              {held ? <PlayIcon size={14} /> : <PauseIcon size={14} />}<span>{held ? "Let it go round" : "Pause the teacup"}</span>
            </button>
          )}
          {!amHost && <button type="button" className="cm-ce-room-button" onClick={() => report(vote && voting ? (vote.target as RoomSeat) : "rob")}>Report to Safety</button>}
          <span className="cm-ce-grow" />
          <button type="button" className="cm-ce-room-button is-ghost" onClick={onLeave}>{amHost ? "End the circle" : "Leave quietly"}</button>
        </div>
        <p className="cm-ce-room-notice" role="status">{notice}</p>
      </section>

      <div className="cm-circle-bottom">
        <section className="cm-card cm-said" aria-labelledby="cm-ce-said-title">
          <div className="cm-card-row">
            <h3 className="cm-side-title" id="cm-ce-said-title">Said in the circle</h3>
            <span className="cm-card-aside">Not kept after the circle ends</span>
          </div>
          <ol className="cm-said-list" ref={box} onScroll={onScroll} tabIndex={0} aria-label="What has been said">
            {state.said.map(line => (
              <li key={line.id} className="cm-said-line cm-msg-in">
                <SmallFace who={line.who} />
                <div className="cm-said-text">
                  <strong>{nameOf(line.who)}{line.over && <span className="cm-ce-over"> · spoke without the teacup</span>}</strong>
                  {line.who === "alira" ? <TypedChatText text={line.text} /> : <span>{line.text}</span>}
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="cm-card cm-ce-rules" aria-labelledby="cm-ce-rules-title">
          <h3 className="cm-side-title" id="cm-ce-rules-title">{voting ? "When the two minutes are up" : "If the circle is asked to vote"}</h3>
          <p><span className="cm-ce-rule-tag is-yes">More than half yes</span>The person leaves the circle and can't rejoin it today. Alira says they have left, and the vote isn't mentioned again.</p>
          <p><span className="cm-ce-rule-tag is-no">Half or fewer</span>They stay. Nobody can ask about them again in this circle, and the host can still mute them.</p>
          <p><span className="cm-ce-rule-tag">Either way</span>The Safety team gets a note with the reason and the result. Two upheld votes in 90 days pause someone's host standing and their seat in member circles for a week.</p>
          <p className="cm-ce-sub">Alira's own circles don't use votes: she decides herself. Votes only exist in circles that members host.</p>
        </section>
      </div>

      {askFor && <AskDialog who={askFor} returnTo={seatButtons.current[askFor] ?? null} onStart={(reason, reply) => ask(askFor, reason, reply)} onMute={() => mute(askFor)} onClose={() => setAskFor(null)} />}
    </div>
  );
}
