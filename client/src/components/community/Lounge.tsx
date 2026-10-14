import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import { CIRCLE_SEATS, lounge, people, PERSON_IDS, type LoungeMessage, type PersonId } from "@/content/community-samples";
import { canSee, circleSeatsTaken, clockLabel, communityHref, communityStore, firstName, isBlocked, useCommunity, type CommunityMemory, type NoteDraft } from "@/lib/community-store";
import { authorNameOf, bandOf, countWord, moderationStore, photoOf, reportersOf, reportedBy, useLoungeModeration, type AuthorNote, type LoungeAuthor, type LoungePost, type LoungeReportReason, type ModerationState, type PhotoCheck } from "@/lib/lounge-moderation";
import { checkLoungePhoto } from "@/lib/lounge-moderation-check";
import { otherAuthors } from "@/lib/lounge-moderation-samples";
import { profileName, useProfile } from "@/lib/profile";
import { useBursts, useLater, usePinnedToEnd } from "./hooks";
import { CheckIcon, ClockIcon, CloseIcon, EyeOffIcon, FlagIcon, HandIcon, HeartIcon, PulseIcon, ShieldIcon } from "./icons";
import { OnlineFace } from "./Messages";
import { AliraMark, ChatInput, Face, FloatingHearts, LiveDot, MemberFace, MyFace, toneClass, TypingRow, VoiceNote } from "./parts";
import { LoungeReportSheet } from "./PostMenu";
import "@/pages/community-lounge-safety.css";

/** A line from the room's script: someone's message, with when it was said. */
type ScriptLine = { at: number; message: LoungeMessage };
/** What can be reported: a post's id, who wrote it and its words. */
type Reportable = { postId: string; author: LoungeAuthor; text: string };
/** The photo in the writing row: being checked, checked and ready, or blocked (and already let go). */
type Attachment =
  | { phase: "checking"; photo: string; name: string }
  | { phase: "ready"; photo: string; name: string; check: PhotoCheck }
  | { phase: "blocked"; check: PhotoCheck; blockedId: string | null; appealed: boolean };

const DAY = 24 * 60 * 60_000;
const RULES_ID = "cm-lounge-rules-title";

/** Whether the person can see what this author writes: not blocked or hidden, here or in the report sheet. */
function canSeeAuthor(memory: CommunityMemory, moderation: ModerationState, author: LoungeAuthor): boolean {
  if (author === "you") return true;
  if (author === "rob" || author === "kev") return !moderation.blockedAuthors.includes(author);
  return canSee(memory, author);
}

/** Anyone's face in the lounge: the person's own, a member's, or the initial of another lounge member. */
function AuthorFace({ author, size = 44 }: { author: LoungeAuthor; size?: number }) {
  if (author === "you") return <MyFace size={size} />;
  if (author === "rob" || author === "kev") {
    const other = otherAuthors[author];
    return <span className="cm-face cm-face-initial" style={{ width: size, height: size, fontSize: Math.round(size * 0.4), fontWeight: 700, backgroundColor: other.tint, color: other.ink }} aria-hidden="true">{other.initial}</span>;
  }
  return <MemberFace who={author} size={size} />;
}

/** "Checked": the photo passed the automatic check, or a person on the care team approved it. */
function CheckedTag({ post }: { post: Pick<LoungePost, "check" | "reviewedAt"> }) {
  if (!post.check) return null;
  return <span className="cm-ls-tag cm-ls-tag-ok"><CheckIcon size={12} strokeWidth={3} />{post.reviewedAt ? "Checked by the care team" : "Checked"}</span>;
}

/** Someone's message: who and when, an optional photo, the words, then a heart, Reply and Report. */
function LoungeLine({ id, author, text, photo, at, note, hearts, tag, onReply, onReport }: {
  id: string; author: LoungeAuthor; text: string; photo: { src: string; alt: string; tint?: string } | null; at: number; note?: string; hearts: number; tag?: ReactNode;
  onReply: ((who: PersonId) => void) | null; onReport: (opener: HTMLElement) => void;
}) {
  const memory = useCommunity();
  const heartKey = `lounge:${id}`;
  const on = memory.hearts.includes(heartKey);
  const counts = memory.settings.showHeartCounts;
  const total = hearts + (on ? 1 : 0);
  const name = authorNameOf(author);
  return (
    <li className="cm-lounge-line cm-msg-in" data-ls-post={id}>
      <AuthorFace author={author} />
      <div className="cm-lounge-body">
        <p className="cm-lounge-meta">
          <b>{name}</b>
          {note && <span className="cm-new-pill">{note}</span>}
          <span className="cm-lounge-time">{clockLabel(at)}</span>
          {tag}
        </p>
        {photo && <img className="cm-lounge-photo" src={photo.src} alt={photo.alt} style={photo.tint ? { backgroundColor: photo.tint } : undefined} loading="lazy" />}
        {text && <p className="cm-lounge-text">{text}</p>}
        <div className="cm-lounge-acts">
          <button type="button" className={`cm-lounge-heart ${on ? "is-on" : ""}`} aria-pressed={on} aria-label={`Heart for ${name}'s message${counts ? `, ${total}` : ""}`} onClick={() => communityStore.toggleHeart(heartKey)}>
            <HeartIcon size={16} fill={on ? "#E8795A" : "none"} strokeWidth={2} />{counts && <span aria-hidden="true">{total}</span>}
          </button>
          {onReply && PERSON_IDS.includes(author as PersonId) && <button type="button" className="cm-lounge-reply" onClick={() => onReply(author as PersonId)}>Reply<span className="cm-sr">{` to ${name}`}</span></button>}
          <button type="button" className="cm-lounge-reply cm-ls-report-button" onClick={event => onReport(event.currentTarget)}><FlagIcon size={14} strokeWidth={2} />Report<span className="cm-sr">{` ${name}'s message`}</span></button>
        </div>
      </div>
    </li>
  );
}

/** A post the person reported: hidden for them while the care team looks, unless they choose to see it. */
function ReportedLine({ id, author, onShow }: { id: string; author: LoungeAuthor; onShow: () => void }) {
  const name = authorNameOf(author);
  return (
    <li className="cm-lounge-line cm-msg-in" data-ls-post={id}>
      <AuthorFace author={author} />
      <div className="cm-ls-collapsed">
        <span className="cm-ls-tag cm-ls-tag-rust"><FlagIcon size={12} strokeWidth={2.5} />You reported this</span>
        <span className="cm-ls-collapsed-text">{`${name}'s post is hidden for you while the care team looks.`}</span>
        <button type="button" className="cm-ls-link" onClick={onShow}>Show anyway<span className="cm-sr">{`: ${name}'s post`}</span></button>
      </div>
    </li>
  );
}

/** Where a removed post was. Nobody is named, and the words are gone for everyone. */
function RemovedLine({ id, by, count }: { id: string; by: "reports" | "care-team"; count: number }) {
  return (
    <li className="cm-lounge-line cm-msg-in" data-ls-post={id}>
      <span className="cm-face cm-ls-removed-face" style={{ width: 44, height: 44 }} aria-hidden="true"><EyeOffIcon size={18} /></span>
      <div className="cm-ls-removed">
        <p className="cm-ls-removed-title">This post was removed</p>
        <p>{by === "reports" ? `${countWord(count).replace(/^./, letter => letter.toUpperCase())} members reported it, so it came down automatically. The care team has been told.` : "The care team took it down because it didn't fit the house rules."}</p>
        <details className="cm-ls-how">
          <summary>How this works</summary>
          <p>Anyone can report a post in one tap, and it stays private. When enough different members report the same post, it comes down for everyone until the care team has looked. The person who wrote it is told privately and can ask for a second look.</p>
        </details>
      </div>
    </li>
  );
}

/** The person's own post, with its photo's "Checked" tag. */
function MyLine({ post }: { post: LoungePost }) {
  const memory = useCommunity();
  const to = post.to && canSee(memory, post.to) ? people[post.to].name : null;
  const photo = photoOf(post);
  return (
    <li className="cm-lounge-line is-mine cm-msg-in" data-ls-post={post.id}>
      <MyFace size={44} />
      <div className="cm-lounge-body">
        <p className="cm-lounge-meta"><b>You</b><span className="cm-lounge-time">{clockLabel(post.createdAt)}</span>{photo && <CheckedTag post={post} />}</p>
        {to && <p className="cm-lounge-to">{`Replying to ${to}`}</p>}
        {photo && <img className="cm-lounge-photo" src={photo.src} alt={photo.alt} />}
        {post.voice ? <VoiceNote words={post.text} label="your voice note" wordsClassName="cm-lounge-text" /> : post.text && <p className="cm-lounge-text">{post.text}</p>}
      </div>
    </li>
  );
}

/** A photo held for the care team: only its author sees it, and can post the words alone or cancel. */
function HeldLine({ post, onAnnounce }: { post: LoungePost; onAnnounce: (text: string) => void }) {
  const photo = photoOf(post);
  const failed = post.check?.source === "fallback";
  return (
    <li className="cm-lounge-line is-mine cm-msg-in" data-ls-post={post.id}>
      <MyFace size={44} />
      <div className="cm-ls-held">
        <p className="cm-lounge-meta">
          <b>You</b><span className="cm-lounge-time">{clockLabel(post.createdAt)}</span>
          <span className="cm-ls-tag cm-ls-tag-amber"><ClockIcon size={12} strokeWidth={2.5} />With the care team · not shown to others yet</span>
        </p>
        {post.text && <p className="cm-lounge-text">{post.text}</p>}
        <div className="cm-ls-held-row">
          {photo && <img className="cm-ls-held-photo" src={photo.src} alt={photo.alt} />}
          <p className="cm-ls-held-why">{failed
            ? "The automatic check couldn't run just now, so a person from the care team will look at this photo before it appears in the lounge. You'll get a message either way."
            : "Our safety check wasn't sure about this photo, so a person from the care team will look before it appears in the lounge. That usually takes under an hour. You'll get a message either way."}</p>
        </div>
        <div className="cm-ls-actions">
          {post.text && <button type="button" className="cm-ls-chip-button" onClick={() => { moderationStore.postWordsOnly(post.id); onAnnounce("Your words are in the lounge. The photo was let go."); }}>Post the words without the photo</button>}
          <button type="button" className="cm-ls-chip-button" onClick={() => { moderationStore.withdraw(post.id); onAnnounce("Your post was cancelled. The photo was let go."); }}>Cancel this post</button>
        </div>
      </div>
    </li>
  );
}

/** Alira's private note to the person about one of their posts, or a message from the care team. */
function NoteLine({ note, name, moderation, onRules }: { note: AuthorNote; name: string; moderation: ModerationState; onRules: () => void }) {
  const when = note.postAt ? clockLabel(note.postAt) : "earlier";
  const removal = note.postId ? moderation.removals[note.postId] : undefined;
  let text = note.text;
  let canAppeal = false;
  if (note.kind === "removed") {
    const count = note.postId ? reportersOf(moderation, note.postId).length : 0;
    text = removal?.by === "reports"
      ? `${name}, your post from ${when} was removed after ${countWord(count)} members reported it. Nothing else changes for you. If you think that's unfair, you can ask the care team to take a look.`
      : `${name}, the care team removed your post from ${when} because it didn't fit the house rules. Nothing else changes for you. If you think that's unfair, you can ask them to take a look.`;
    canAppeal = true;
  } else if (note.kind === "declined") {
    text = `${name}, the care team looked at your photo from ${when} and decided not to share it in the lounge. Photos can be kept back for things like medical details or other people's faces. Nothing else changes for you. If you think that's unfair, you can ask them to take a look.`;
    canAppeal = true;
  } else if (note.kind === "approved") {
    text = `Good news, ${name}: the care team looked at your photo from ${when} and it's now in the lounge, at the time you sent it.`;
  } else if (note.kind === "restored") {
    text = `${name}, the care team looked again and put your post from ${when} back in the lounge.`;
  }
  return (
    <li className="cm-lounge-line cm-msg-in">
      <AliraMark size={44} />
      <div className="cm-ls-note">
        <p className="cm-overline cm-overline-gold">{note.kind === "message" ? "Only you see this · from the care team" : "Only you see this · from Alira"}</p>
        <p className="cm-ls-note-text">{text}</p>
        {canAppeal && (
          <div className="cm-ls-actions">
            {note.appealed
              ? <p className="cm-ls-note-sent" role="status"><CheckIcon size={14} strokeWidth={2.6} />Sent. The care team will look again.</p>
              : <button type="button" className="cm-ls-chip-button cm-ls-chip-amber" onClick={() => moderationStore.appeal({ noteId: note.id })}>Ask the care team</button>}
            <button type="button" className="cm-ls-link" onClick={onRules}>Read the house rules</button>
          </div>
        )}
      </div>
    </li>
  );
}

/** "Here right now": who is in the lounge, with a wave for each. A wave can't be taken back, like a real one. */
function HereNow() {
  const memory = useCommunity();
  const later = useLater();
  // Waves sent in this visit wait a moment for their wave back. Earlier waves already have one.
  const [waiting, setWaiting] = useState<PersonId[]>([]);
  const titleId = useId();
  const wave = (who: PersonId) => {
    if (memory.waves.includes(who)) return;
    communityStore.wave(who);
    setWaiting(list => [...list, who]);
    later(() => setWaiting(list => list.filter(other => other !== who)), 1500);
  };
  return (
    <section className="cm-card cm-side-card" aria-labelledby={titleId}>
      <div className="cm-card-row">
        <h3 className="cm-side-title" id={titleId}>Here right now</h3>
        <span className="cm-card-aside">Wave to say hello</span>
      </div>
      <ul className="cm-wave-list">
        {lounge.waves.filter(({ who }) => !isBlocked(memory, who)).map(({ who, note }) => {
          const waved = memory.waves.includes(who);
          const back = waved && !waiting.includes(who);
          const name = people[who].name;
          return (
            <li key={who} className="cm-wave-row">
              <OnlineFace who={who} size={44} online />
              <span className="cm-wave-text"><b>{name}</b><span className={back ? "is-back" : ""}>{back ? "Waved back!" : note}</span></span>
              <button type="button" className={`cm-wave ${waved ? "is-on" : ""}`} onClick={() => wave(who)} aria-disabled={waved || undefined}>
                <span className={`cm-wave-hand ${waiting.includes(who) ? "cm-wiggle" : ""}`}><HandIcon size={16} /></span>
                <span>{waved ? "Waved" : "Wave"}</span><span className="cm-sr">{` to ${name}`}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function HouseRules() {
  return (
    <section className="cm-card cm-side-card" aria-labelledby={RULES_ID}>
      <h3 className="cm-side-title" id={RULES_ID} tabIndex={-1}>House rules</h3>
      <ol className="cm-rules">
        {lounge.rules.map((rule, index) => <li key={rule}><span className="cm-rule-number" aria-hidden="true">{index + 1}</span><span>{rule}</span></li>)}
      </ol>
      <p className="cm-ls-rules-photos"><ShieldIcon size={16} /><span>Photos are checked before they appear. Nothing sexual, hateful, graphic or about illegal drugs.</span></p>
    </section>
  );
}

function PollCard() {
  const vote = useCommunity().vote;
  const titleId = useId();
  const base = lounge.poll.options.reduce((sum, option) => sum + option.votes, 0);
  const total = base + (vote ? 1 : 0);
  return (
    <section className="cm-card cm-side-card" aria-labelledby={titleId}>
      <h3 className="cm-overline cm-overline-rust" id={titleId}>Tea-break poll</h3>
      <p className="cm-poll-question">{lounge.poll.question}</p>
      <div className="cm-poll" role="group" aria-labelledby={titleId}>
        {lounge.poll.options.map(option => {
          const count = option.votes + (vote === option.id ? 1 : 0);
          const share = vote ? Math.round((count * 100) / total) : 0;
          return (
            <button key={option.id} type="button" className={`cm-poll-option ${vote === option.id ? "is-on" : ""}`} aria-pressed={vote === option.id} onClick={() => communityStore.vote(option.id)}>
              <span className="cm-poll-bar" aria-hidden="true" style={{ width: `${share}%`, background: option.fill }} />
              <span className="cm-poll-label">{option.label}</span>
              {vote && <span className="cm-poll-share">{` ${share}%`}</span>}
            </button>
          );
        })}
      </div>
      <p className="cm-card-note">{vote ? `Thanks! ${total} people have voted` : "Tap one to see what everyone picked"}</p>
    </section>
  );
}

/** The Sunday circle, beside the lounge: how full it is, and the way in. */
export function CircleNote() {
  const memory = useCommunity();
  const taken = circleSeatsTaken(memory);
  return (
    <section className="cm-circle-note" aria-labelledby="cm-circle-note-title">
      <div>
        <h3 id="cm-circle-note-title">Sunday circle</h3>
        <p>{`Live now · ${taken} of ${CIRCLE_SEATS} seats taken`}</p>
      </div>
      <Link className="cm-btn cm-btn-gold" href={communityHref("circle")}>Open<span className="cm-sr"> the Sunday circle</span></Link>
    </section>
  );
}

/** The photo above the writing row: its safety check running, its result, or the notice that it can't be shared. */
function PhotoStrip({ attach, onRemove, onChoose, onRules, onAppeal }: { attach: Attachment; onRemove: () => void; onChoose: () => void; onRules: () => void; onAppeal: () => void }) {
  if (attach.phase === "blocked") {
    return (
      <div className="cm-ls-blocked" role="alert">
        <div className="cm-ls-blocked-body">
          <p className="cm-ls-blocked-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg>We can't share this photo</p>
          <p>Our safety check found content that isn't allowed in the lounge: things like sexual, hateful or graphic images. Nothing was posted and nobody else has seen it.</p>
          <div className="cm-ls-actions">
            <button type="button" className="cm-btn cm-btn-small cm-btn-green" onClick={onChoose}>Choose another photo</button>
            <button type="button" className="cm-ls-chip-button cm-ls-chip-rust" onClick={onRules}>Read the house rules</button>
            {attach.appealed
              ? <span className="cm-ls-note-sent" role="status"><CheckIcon size={14} strokeWidth={2.6} />Sent. The care team will be in touch.</span>
              : <button type="button" className="cm-ls-link" onClick={onAppeal}>Think this is a mistake? Ask the care team to look</button>}
          </div>
        </div>
        <button type="button" className="cm-ls-round-close" aria-label="Dismiss this notice" onClick={onRemove}><CloseIcon size={16} /></button>
      </div>
    );
  }
  const checking = attach.phase === "checking";
  const passed = attach.phase === "ready" && attach.check.verdict === "pass";
  return (
    <div className="cm-ls-strip">
      <img src={attach.photo} alt="The photo you chose" />
      <div className="cm-ls-strip-text">
        <p className="cm-ls-strip-name">{attach.name}</p>
        <p className={`cm-ls-strip-state ${checking ? "is-checking" : passed ? "is-ok" : "is-held"}`} role="status">
          {checking ? <span className="cm-ls-spinner" aria-hidden="true" /> : passed ? <CheckIcon size={14} strokeWidth={2.6} /> : <ClockIcon size={14} strokeWidth={2.4} />}
          {checking ? "Checking this photo for safety… usually takes a second"
            : passed ? "Checked. Ready to share"
            : attach.phase === "ready" && attach.check.source === "fallback" ? "The check couldn't run. When you send it, the care team will look before it appears."
            : "We weren't sure about this one. When you send it, the care team will look before it appears."}
        </p>
      </div>
      <button type="button" className="cm-ls-round-close" aria-label="Remove the photo" onClick={onRemove}><CloseIcon size={16} /></button>
    </div>
  );
}

/** One thing in the room's log, in time order. */
type Entry =
  | { kind: "script"; at: number; line: ScriptLine }
  | { kind: "post"; at: number; post: LoungePost }
  | { kind: "note"; at: number; note: AuthorNote };

/**
 * F1: the lounge. Messages and people arrive while it is open; anyone can join in with a tap, give
 * a message a heart, reply to someone, or report a message to the care team. What the person says
 * is kept on this device (lib/lounge-moderation.ts), and every photo is checked before it can be
 * shared: a clear one posts straight away, an unsure one waits for the care team (only its author
 * sees it), and a clear violation is turned away and not kept. Messages from people the person has
 * blocked or hidden are left out, and so are quick replies to them.
 */
export default function LoungeView({ active, here, onHere }: { active: boolean; here: number; onHere: (change: (here: number) => number) => void }) {
  const memory = useCommunity();
  const moderation = useLoungeModeration();
  const name = firstName(profileName(useProfile()));
  // Blocked people are out of sight, their faces included.
  const faces = lounge.faces.filter(who => !isBlocked(memory, who));
  const [script, setScript] = useState<ScriptLine[]>(() => lounge.messages.map(message => ({ at: communityStore.visitStart - (message.minutesAgo ?? 0) * 60_000, message })));
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState<PersonId | null>(null);
  const [toast, setToast] = useState<{ who: PersonId; text: string; n: number } | null>(null);
  const [notice, setNotice] = useState<{ text: string; n: number } | null>(null);
  const [replyTo, setReplyTo] = useState<PersonId | null>(null);
  const [sentNote, setSentNote] = useState("");
  const [attach, setAttach] = useState<Attachment | null>(null);
  const [reporting, setReporting] = useState<(Reportable & { opener: HTMLElement }) | null>(null);
  // Reported posts the person chose to see anyway, for this visit.
  const [shown, setShown] = useState<string[]>([]);
  const checking = useRef<AbortController | null>(null);
  const noticeCount = useRef(0);
  const room = useRef<HTMLElement>(null);
  const { bursts, burst } = useBursts();
  const later = useLater();
  const [layer, setLayer] = useState<HTMLElement | null>(null);
  useEffect(() => { setLayer(document.querySelector<HTMLElement>(".cm-layer")); }, []);
  useEffect(() => () => checking.current?.abort(), []);

  // The room carries on while it is open: someone writes, a message arrives, someone comes in.
  useEffect(() => {
    if (!active || step >= lounge.script.length) return;
    const timer = window.setTimeout(() => {
      const event = lounge.script[step];
      setStep(step + 1);
      if (event.kind === "typing") setTyping(event.who);
      else if (event.kind === "message") {
        setTyping(null);
        setScript(list => [...list, { at: Date.now(), message: event.message }]);
      } else {
        setToast({ who: event.who, text: event.text, n: step });
        onHere(count => count + 1);
        later(() => setToast(current => (current?.n === step ? null : current)), 3200);
      }
    }, lounge.everyMs);
    return () => window.clearTimeout(timer);
  }, [active, step, onHere, later]);

  /** A short dark pill at the foot of the room, read out too. */
  const announce = (text: string) => {
    const n = ++noticeCount.current;
    setNotice({ text, n });
    setSentNote(text);
    later(() => setNotice(current => (current?.n === n ? null : current)), 4200);
  };

  // Everything in the room, oldest first: the script, posts kept on this device (the person's own,
  // and other members' that the care team has let through), and Alira's private notes to the person.
  const now = Date.now();
  const entries: Entry[] = [
    ...script.map(line => ({ kind: "script" as const, at: line.at, line })),
    ...moderation.posts.filter(post => {
      if (moderation.removals[post.id]) return now - moderation.removals[post.id].at < DAY;
      if (post.author === "you") return post.status === "live" || post.status === "pending_review";
      return post.status === "live" && canSeeAuthor(memory, moderation, post.author);
    }).map(post => ({ kind: "post" as const, at: post.createdAt, post })),
    ...moderation.notes.filter(note => now - note.at < 7 * DAY).map(note => ({ kind: "note" as const, at: note.at, note })),
  ].sort((a, b) => a.at - b.at);
  const { box, onScroll } = usePinnedToEnd<HTMLDivElement>(entries.length + (typing ? 0.5 : 0) + (notice ? 0.25 : 0), active);
  const heldCount = moderation.posts.filter(post => post.author === "you" && post.status === "pending_review").length;

  const field = () => room.current?.querySelector<HTMLInputElement>(".cm-chat-field input") ?? null;
  const reply = (who: PersonId) => { setReplyTo(who); window.requestAnimationFrame(() => field()?.focus()); };
  const toRules = () => {
    const heading = document.getElementById(RULES_ID);
    heading?.scrollIntoView({ block: "center", behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    heading?.focus({ preventScroll: true });
  };

  const choosePhoto = async (photo: string, fileName: string) => {
    checking.current?.abort();
    const controller = new AbortController();
    checking.current = controller;
    setAttach({ phase: "checking", photo, name: fileName });
    const check = await checkLoungePhoto(photo, bandOf(moderationStore.load().settings), { signal: controller.signal });
    if (controller.signal.aborted || checking.current !== controller) return;
    checking.current = null;
    const blockedId = moderationStore.recordCheck(check);
    if (check.verdict === "block") {
      // Nothing of the photo is kept: only the attempt is noted for the care team.
      setAttach({ phase: "blocked", check, blockedId, appealed: false });
      setSentNote("We can't share this photo. Nothing was posted.");
    } else {
      setAttach({ phase: "ready", photo, name: fileName, check });
      setSentNote(check.verdict === "pass" ? "Your photo passed the safety check. Press Send to share it." : "The care team will look at this photo before it appears.");
    }
  };
  const dropPhoto = () => { checking.current?.abort(); checking.current = null; setAttach(null); field()?.focus(); };

  const send = (draft: NoteDraft, withPhoto = true) => {
    const text = draft.text.trim();
    const ready = withPhoto && attach?.phase === "ready" ? attach : null;
    if (!text && !ready) return;
    const made = moderationStore.addPost({ text, voice: !!draft.voice, to: replyTo, photo: ready?.photo ?? null, check: ready?.check ?? null });
    if (!made) return;
    if (ready) {
      setAttach(null);
      announce(made.status === "live" ? "Shared. Your photo passed the safety check and is in the lounge." : "Your photo is with the care team. Only you can see it for now.");
    } else {
      if (withPhoto && attach?.phase === "blocked") setAttach(null);
      setSentNote(replyTo ? `Sent to ${people[replyTo].name}: ${text}` : `Sent: ${text}`);
    }
    setReplyTo(null);
  };

  const openReport = (target: Reportable, opener: HTMLElement) => setReporting({ ...target, opener });
  const sendReport = (reason: LoungeReportReason, alsoBlock: boolean) => {
    if (!reporting) return;
    const outcome = moderationStore.report({ postId: reporting.postId, author: reporting.author, text: reporting.text, reason }, alsoBlock);
    setReporting(null);
    setShown(list => list.filter(id => id !== reporting.postId));
    announce(outcome === "removed" ? "Thanks. That was enough reports, so the post has been removed for everyone." : outcome === "duplicate" ? "You've already reported this post. The care team has it." : "Thanks. Your report is private and with the care team.");
  };
  const afterReport = () => {
    const id = reporting?.postId;
    return (id ? document.querySelector<HTMLElement>(`[data-ls-post="${id}"] button`) : null) ?? field();
  };

  /** A message or post from someone else: removed, collapsed for the reporter, or in full. */
  const othersLine = (id: string, author: LoungeAuthor, text: string, at: number, extra: { photo?: { src: string; alt: string; tint?: string } | null; note?: string; hearts?: number; tag?: ReactNode }) => {
    const removal = moderation.removals[id];
    if (removal) return <RemovedLine key={id} id={id} by={removal.by} count={reportersOf(moderation, id).length} />;
    if (moderation.settings.hideForReporter && reportedBy(moderation, id) && !shown.includes(id)) return <ReportedLine key={id} id={id} author={author} onShow={() => setShown(list => [...list, id])} />;
    return <LoungeLine key={id} id={id} author={author} text={text} at={at} photo={extra.photo ?? null} note={extra.note} hearts={extra.hearts ?? 0} tag={extra.tag} onReply={reply} onReport={opener => openReport({ postId: id, author, text }, opener)} />;
  };

  const replyName = replyTo && canSee(memory, replyTo) ? people[replyTo].name : null;
  const footnote = attach?.phase === "blocked"
    ? "Blocked photos are not stored. Repeated attempts are noted for the care team."
    : heldCount
      ? `${heldCount} photo${heldCount === 1 ? "" : "s"} waiting for review · You can keep chatting while you wait.`
      : "Photos are checked automatically before they appear. Clear ones post straight away; if we're not sure, the care team takes a look first.";

  return (
    <div className="cm-layout cm-lounge">
      <section ref={room} className="cm-card cm-chat cm-lounge-room" aria-labelledby="cm-lounge-title">
        {toast && canSee(memory, toast.who) && (
          <div key={toast.n} className="cm-toast" aria-hidden="true">
            <Face who={toast.who} size={32} /><span>{toast.text}</span>
          </div>
        )}
        <header className="cm-lounge-head">
          <div className="cm-lounge-titles">
            <h2 id="cm-lounge-title" tabIndex={-1} data-view-heading>The lounge</h2>
            <p className="cm-live-line"><LiveDot /><span>{`${here} people here now`}</span><span className="cm-live-soft">· Open to everyone in the community</span></p>
          </div>
          <span className="cm-face-stack cm-chat-faces" aria-hidden="true">
            {faces.map(who => <Face key={who} who={who} size={40} />)}
            <span className="cm-face-more">+{Math.max(0, here - faces.length)}</span>
          </span>
        </header>
        <div className="cm-starter">
          <span className="cm-starter-mark" aria-hidden="true"><PulseIcon size={20} /></span>
          <div>
            <p className="cm-overline cm-overline-gold">Today's conversation starter from Alira</p>
            <p className="cm-starter-text">{lounge.starter}</p>
          </div>
        </div>
        <div className="cm-chat-log" ref={box} onScroll={onScroll} role="log" aria-live="off" aria-label="Messages in the lounge" tabIndex={0}>
          <div className="cm-chat-fade" aria-hidden="true" />
          <ol className="cm-messages cm-lounge-lines">
            <li className="cm-lounge-day" aria-hidden="true"><span>Today</span></li>
            {entries.map(entry => {
              if (entry.kind === "script") {
                const message = entry.line.message;
                if (!canSee(memory, message.who) && !moderation.removals[message.id]) return null;
                return othersLine(message.id, message.who, message.text, entry.line.at, { photo: message.photo ?? null, note: message.note, hearts: message.hearts });
              }
              if (entry.kind === "note") return <NoteLine key={entry.note.id} note={entry.note} name={name} moderation={moderation} onRules={toRules} />;
              const post = entry.post;
              if (post.author !== "you") return othersLine(post.id, post.author, post.text, post.createdAt, { photo: photoOf(post), tag: photoOf(post) ? <CheckedTag post={post} /> : undefined });
              if (moderation.removals[post.id]) return <RemovedLine key={post.id} id={post.id} by={moderation.removals[post.id].by} count={reportersOf(moderation, post.id).length} />;
              return post.status === "pending_review" ? <HeldLine key={post.id} post={post} onAnnounce={announce} /> : <MyLine key={post.id} post={post} />;
            })}
          </ol>
          {typing && canSee(memory, typing) && <TypingRow who={typing} />}
        </div>
        <FloatingHearts bursts={bursts} className="cm-hearts-chat" />
        <div className="cm-chat-foot cm-lounge-foot">
          {notice && <div key={notice.n} className="cm-ls-toast" aria-hidden="true"><span className="cm-ls-toast-tick"><CheckIcon size={13} strokeWidth={3} /></span>{notice.text}</div>}
          {replyName && (
            <p className="cm-lounge-replying">
              <span>{`Replying to ${replyName}`}</span>
              <button type="button" className="cm-dm-icon" aria-label={`Stop replying to ${replyName}`} onClick={() => { setReplyTo(null); field()?.focus(); }}><CloseIcon size={14} /></button>
            </p>
          )}
          <div className="cm-quick-row" role="group" aria-label="Quick replies">
            {lounge.quickReplies.filter(item => !item.to || canSee(memory, item.to)).map(item => <button key={item.label} type="button" className={`cm-quick cm-quick-chip ${toneClass(item.tone)}`} onClick={() => send({ text: item.text }, false)}>{item.label}</button>)}
            <button type="button" className="cm-love" aria-label="Send a heart" onClick={burst}><HeartIcon size={20} fill="currentColor" strokeWidth={1.6} /></button>
          </div>
          <ChatInput
            label={replyName ? `Reply to ${replyName}` : "Say something to the lounge"}
            placeholder={replyName ? `Reply to ${replyName}` : "Say something to the lounge"}
            onSend={draft => send(draft)}
            sendText="Send"
            photoFlow={{
              onChosen: (photo, fileName) => { void choosePhoto(photo, fileName); },
              strip: choose => attach && (
                <PhotoStrip attach={attach} onRemove={dropPhoto} onChoose={choose} onRules={toRules}
                  onAppeal={() => { if (attach.phase === "blocked" && attach.blockedId) { moderationStore.appeal({ blockedId: attach.blockedId }); setAttach({ ...attach, appealed: true }); } }} />
              ),
              holdSend: attach?.phase === "checking",
              ready: attach?.phase === "ready",
              sendText: attach?.phase === "blocked" ? "Send text only" : undefined,
              footnote: <p className="cm-ls-foot"><ShieldIcon size={14} /><span>{footnote}</span></p>,
            }}
          />
          <p className="cm-sr" role="status">{sentNote}</p>
        </div>
      </section>

      <div className="cm-side">
        <HereNow />
        <HouseRules />
        <CircleNote />
        <PollCard />
      </div>

      {reporting && createPortal(
        <LoungeReportSheet
          name={authorNameOf(reporting.author)}
          excerpt={reporting.text.length > 90 ? `${reporting.text.slice(0, 89).trimEnd()}…` : reporting.text}
          threshold={moderation.settings.threshold}
          canBlock={canSeeAuthor(memory, moderation, reporting.author)}
          onSend={sendReport}
          onClose={() => setReporting(null)}
          returnFocus={reporting.opener}
          fallbackFocus={afterReport}
        />,
        layer ?? document.body,
      )}
    </div>
  );
}
