import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { dailyQuestion, type DailyAnswer } from "@/content/daily-questions";
import { people } from "@/content/community-samples";
import { canSee, commentKey, communityStore, useCommunity } from "@/lib/community-store";
import { pokerNightOn, usePokerNight } from "@/lib/poker-night";
import { SharingLocked, useCanShare } from "@/components/SharingLocked";
import PokerFridayCard from "./games/PokerFridayCard";
import { Face, MyFace } from "./parts";

// The Daily question at the top of the feed, as the "Live thread" design (option B): one question a day from Rehyn
// (the card says "Rehyn", with "Daily question" as a small label under it), its key phrase underlined, today's answers
// coming in one at a time in a three-row window that slides up (with "<name> is writing an answer" first and the
// newest briefly lit), a count that bumps, starters that fill the answer box, and the person's own answer pinned
// beneath with Remove. The answers are the example people's (this is a
// preview): they come in once, and after that the window goes round today's answers without inventing new ones.
// Everything stands still with reduced motion; the content still changes. Styles: community-daily.css.
// On Fridays (poker night) the card is the poker invitation instead: games/PokerFridayCard.tsx.

/** One step: someone is writing, then (the next step) their answer comes in. */
const STEP_MS = 2200;
/** Rows in the window (its height in the CSS matches). */
const ROWS = 3;

const reducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** The heart for an answer, filled once the person has sent one. */
const HeartGlyph = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

/** An answer and its heart: the name, the option chosen (if any) and the words, in one line. */
function AnswerRow({ answer, voteKey, fresh = false, wrap = false }: { answer: DailyAnswer; voteKey: string; fresh?: boolean; wrap?: boolean }) {
  const memory = useCommunity();
  const liked = memory.commentVotes[voteKey] === "like";
  const name = people[answer.who].name;
  return (
    <div className={`dq-row ${fresh ? "is-new" : ""} ${wrap ? "is-open" : ""}`}>
      <Face who={answer.who} size={34} />
      <p className="dq-bubble">
        <strong>{name}</strong>
        {answer.tag && <span className="dq-tag"><span className="dq-tag-dot" style={{ background: answer.tag.colour }} aria-hidden="true" /><span>{answer.tag.label}</span></span>}
        <span className="dq-bubble-text">{answer.text}</span>
      </p>
      <button type="button" className="dq-heart" aria-pressed={liked} aria-label={`${liked ? "Remove your heart from" : "Send a heart to"} ${name}'s answer`} onClick={() => communityStore.voteComment(voteKey, "like")}>
        <HeartGlyph /><span>{answer.hearts + (liked ? 1 : 0)}</span>
      </button>
    </div>
  );
}

/** A place on the moving belt: which answer, and a key of its own (the same answer comes round again). */
type Slot = { index: number; key: number };

/** Rehyn's daily card: the Daily question, or on poker night (Fridays) the poker invitation instead. */
export default function DailyQuestionCard({ name }: { name: string }) {
  const poker = usePokerNight();
  return pokerNightOn(poker) ? <PokerFridayCard /> : <DailyQuestionThread name={name} />;
}

function DailyQuestionThread({ name }: { name: string }) {
  const memory = useCommunity();
  const canShare = useCanShare();
  const [today] = useState(() => dailyQuestion());
  // Answers from people the person has blocked or hidden are left out, as everywhere in My community.
  const answers = today.answers.map((answer, index) => ({ answer, index })).filter(({ answer }) => canSee(memory, answer.who));
  const total = answers.length;
  const mine = (memory.replies[today.id] ?? []).at(-1) ?? null;
  const voteKey = (index: number) => commentKey(today.id, `a${index}`);

  // How many of today's answers have come in: the first three are there as the card opens.
  const [arrived, setArrived] = useState(() => Math.min(ROWS, total));
  const [belt, setBelt] = useState<Slot[]>(() => Array.from({ length: Math.min(ROWS, total) }, (_, index) => ({ index, key: index })));
  const [shifting, setShifting] = useState(false);
  const [freshKey, setFreshKey] = useState<number | null>(null);
  const [writer, setWriter] = useState<string | null>(null);
  const [entering, setEntering] = useState(true);
  const [all, setAll] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [draft, setDraft] = useState("");
  const [nudge, setNudge] = useState(false);
  const [bump, setBump] = useState(0);
  const step = useRef(0);
  const next = useRef(Math.min(ROWS, total));
  const keys = useRef(Math.min(ROWS, total));
  const card = useRef<HTMLElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const questionId = useId();
  const count = arrived + (mine ? 1 : 0);

  // The thread moves only while the card is on screen (and not while every answer is open).
  useEffect(() => {
    const node = card.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const watch = new IntersectionObserver(entries => setOnScreen(entries.some(entry => entry.isIntersecting)), { threshold: 0.15 });
    watch.observe(node);
    return () => watch.disconnect();
  }, []);

  useEffect(() => {
    if (!onScreen || all || total <= ROWS) return;
    const timer = window.setInterval(() => {
      step.current += 1;
      const coming = next.current % total;
      const arriving = next.current < total;
      // Coming in for the first time: "<name> is writing an answer", then the answer. Going round again: no writing.
      if (step.current % 2 === 1) { setWriter(arriving ? people[answers[coming].answer.who].name : null); return; }
      setWriter(null);
      setEntering(false);
      const key = keys.current++;
      next.current += 1;
      setBelt(current => [...current, { index: coming, key }]);
      if (arriving) { setArrived(value => Math.min(total, value + 1)); setFreshKey(key); setBump(value => value + 1); }
      else setFreshKey(null);
      if (reducedMotion()) setBelt(current => current.slice(-ROWS));
      else setShifting(true);
    }, STEP_MS);
    return () => window.clearInterval(timer);
  }, [onScreen, all, total]);

  const shifted = () => { setBelt(current => current.slice(-ROWS)); setShifting(false); };
  // A starter is the beginning of a sentence ("Nobody warned me…"): it fills the box without the dots, ready to carry on.
  const fill = (words: string) => { setDraft(words.replace(/…$/, " ")); setNudge(false); input.current?.focus(); };
  const send = (event: FormEvent) => {
    event.preventDefault();
    const words = draft.trim();
    if (!words) { setNudge(true); input.current?.focus(); return; }
    if (communityStore.addReply(today.id, { text: words })) { setDraft(""); setNudge(false); setBump(value => value + 1); }
  };
  const remove = () => { if (mine) { communityStore.removeReply(today.id, mine.id); setBump(value => value + 1); } };
  const shown = answers.slice(0, arrived);

  return (
    <article ref={card} className={`dq-card ${entering ? "is-entering" : ""}`} aria-labelledby={questionId}>
      <header className="dq-head">
        <span className="dq-mark" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2.5-6 4 12 2.5-6h5" /></svg>
        </span>
        <div className="dq-titles">
          <p className="dq-eyebrow">Rehyn</p>
          <p className="dq-kind">Daily question</p>
        </div>
        <div className="dq-count">
          <span className="dq-stack" aria-hidden="true">{answers.slice(0, 3).map(({ answer }) => <Face key={answer.who} who={answer.who} size={34} />)}</span>
          <p className="dq-count-text"><span key={bump} className={`dq-count-num ${bump ? "is-bumping" : ""}`}>{count}</span> <span>answered</span></p>
        </div>
      </header>

      <h3 className="dq-question" id={questionId}>
        {today.pre}<span className="dq-key"><span className="dq-key-text">{today.key}</span></span>{today.post}
      </h3>

      <section className="dq-thread" aria-label="Answers">
        {all ? (
          <div className="dq-list">
            {shown.map(({ answer, index }) => <AnswerRow key={index} answer={answer} voteKey={voteKey(index)} wrap />)}
          </div>
        ) : (
          <div className="dq-window">
            <div className={`dq-belt ${shifting ? "is-shifting" : ""}`} onAnimationEnd={event => { if (event.target === event.currentTarget && event.animationName === "dq-shift") shifted(); }}>
              {belt.map(slot => {
                const item = answers[slot.index];
                return item ? <AnswerRow key={slot.key} answer={item.answer} voteKey={voteKey(item.index)} fresh={slot.key === freshKey} /> : null;
              })}
            </div>
          </div>
        )}
        <div className="dq-status">
          {writer && !all && (
            <p className="dq-typing" aria-hidden="true">
              <span className="dq-dots"><i /><i /><i /></span>
              <span className="dq-typing-line"><span>{`${writer} is writing`}</span><span className="dq-typing-more"> an answer</span></span>
            </p>
          )}
          {total > 0 && (
            <button type="button" className="dq-seeall" aria-expanded={all} onClick={() => setAll(!all)}>{all ? "Show fewer" : "See all answers"}</button>
          )}
        </div>
      </section>

      {mine ? (
        <div className="dq-mine">
          <span className="dq-mine-face">
            <MyFace size={44} />
            <span className="dq-mine-check" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
            </span>
          </span>
          <div className="dq-mine-body">
            <p className="dq-mine-status" role="status">{`Your answer is in. Thanks for sharing, ${name}.`}</p>
            <p className="dq-mine-text">{mine.text}</p>
          </div>
          <button type="button" className="dq-remove" onClick={remove}>Remove<span className="cm-sr"> your answer</span></button>
        </div>
      ) : !canShare ? <SharingLocked what="answer" /> : (
        <div className="dq-compose">
          <div className="dq-chips" role="group" aria-label="Starters for your answer">
            {today.starters.map(words => <button key={words} type="button" className="dq-chip" onClick={() => fill(words)}>{words}</button>)}
          </div>
          <form className="dq-reply" onSubmit={send}>
            <MyFace size={40} />
            <label className="dq-field">
              <span className="cm-sr">Write your answer to today's question</span>
              <input ref={input} className="dq-input" type="text" value={draft} maxLength={400} placeholder={today.placeholder} autoComplete="off"
                onChange={event => { setDraft(event.target.value); setNudge(false); }} />
            </label>
            <button type="submit" className={`dq-send ${draft.trim() ? "is-ready" : ""}`} aria-label="Post your answer">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </button>
          </form>
          {nudge && <p className="dq-nudge" role="status">Write a few words first, then send.</p>}
        </div>
      )}
    </article>
  );
}
