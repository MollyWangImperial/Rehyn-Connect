import { Fragment, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { Breathing, Conversation, Film, MediaPiece, Practice } from "@/content/ischaemic-media";
import type { LearnSource } from "@/content/my-time-learn";
import { splitSentences, useReadAloud } from "@/lib/alira-read-aloud";
import { dayKey, longDate, prefersStill, useLocal, weekKey } from "@/lib/library-local";
import { AliraMark, BackIcon, ChevronIcon, ExternalIcon, PauseIcon, PlayIcon, TickIcon } from "./parts";
import { SceneArtwork } from "./SceneArt";

// The watch, listen and practise pieces on a Library page (content/ischaemic-media.ts): narrated
// films whose pictures move while Alira reads, a two-voice conversation, a breathing guide, an arm
// and hand practice tracker and an energy diary. Anything a reader fills in stays in this browser.

export function MediaPieceView({ piece }: { piece: MediaPiece }) {
  switch (piece.kind) {
    case "film": return <FilmPlayer film={piece} />;
    case "conversation": return <ConversationPlayer talk={piece} />;
    case "breathing": return <BreathingGuide piece={piece} />;
    case "practice": return <PracticeSet piece={piece} />;
  }
}

function MediaSources({ sources, note }: { sources: LearnSource[]; note?: string }) {
  return <div className="lib-media-sources">
    {note && <p>{note}</p>}
    <p>Where this comes from: {sources.map((source, index) => <Fragment key={source.url}>
      {index > 0 ? ", " : ""}
      <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ExternalIcon size={11} /><span className="lib-sr"> (opens in a new tab)</span></a>
    </Fragment>)}.</p>
  </div>;
}

/** Keeps a node in comfortable view while something plays, without moving the page at every step. */
function useKeepInView(node: HTMLElement | null, when: boolean) {
  useEffect(() => {
    if (!node || !when || typeof window === "undefined") return;
    const box = node.getBoundingClientRect();
    const height = window.innerHeight || document.documentElement.clientHeight;
    if (box.top >= height * 0.12 && box.bottom <= height * 0.88) return;
    node.scrollIntoView({ block: "nearest", behavior: prefersStill() ? "auto" : "smooth" });
  }, [node, when]);
}

const VOICE_FAILED = "Reading aloud did not start";

// ---- Films ------------------------------------------------------------------------------------

export function FilmPlayer({ film }: { film: Film }) {
  const plan = useMemo(() => {
    const lines: string[] = [...splitSentences(film.intro)];
    const starts = film.scenes.map(scene => {
      const start = lines.length;
      lines.push(...splitSentences(scene.caption));
      return start;
    });
    const outro = lines.length;
    lines.push(...splitSentences(film.outro));
    return { lines, starts, outro };
  }, [film]);
  const reading = useReadAloud(plan.lines, true);
  const last = film.scenes.length;
  /** -1 is the title card, 0 to n-1 the scenes, n the closing card. */
  const [stage, setStage] = useState(-1);
  const [silent, setSilent] = useState(false);
  const [silentPlaying, setSilentPlaying] = useState(false);
  const stageOf = (index: number) => index < (plan.starts[0] ?? 0) ? -1 : index >= plan.outro ? last : plan.starts.reduce((found, start, at) => index >= start ? at : found, 0);
  const startOf = (at: number) => at < 0 ? 0 : at >= last ? plan.outro : plan.starts[at] ?? 0;

  useEffect(() => { if (reading.index >= 0) setStage(stageOf(reading.index)); }, [reading.index]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (reading.done) setStage(last); }, [reading.done, last]);
  // If Alira's voice and the device's both fail, the film carries on with captions only.
  const voiceFailed = !reading.playing && reading.note.startsWith(VOICE_FAILED);
  useEffect(() => { if (voiceFailed) { setSilent(true); setSilentPlaying(true); } }, [voiceFailed]);

  const words = stage < 0 ? film.intro : stage >= last ? film.outro : film.scenes[stage]?.caption ?? "";
  useEffect(() => {
    if (!silent || !silentPlaying) return;
    if (stage >= last) { setSilentPlaying(false); return; }
    const wait = Math.max(4500, words.split(/\s+/).length * 380);
    const timer = window.setTimeout(() => setStage(stage + 1), wait);
    return () => window.clearTimeout(timer);
  }, [silent, silentPlaying, stage, last, words]);

  const playing = silent ? silentPlaying : reading.playing;
  const play = () => {
    if (silent) {
      if (!silentPlaying && stage >= last) setStage(-1);
      setSilentPlaying(!silentPlaying);
      return;
    }
    if (reading.playing) { reading.toggle(); return; }
    if (reading.index >= 0 && stageOf(reading.index) === stage) { reading.toggle(); return; }
    reading.seek(startOf(stage >= last ? -1 : stage), true);
    if (stage >= last) setStage(-1);
  };
  const goTo = (at: number) => {
    const next = Math.max(-1, Math.min(last, at));
    setStage(next);
    if (!silent && reading.playing) reading.seek(startOf(next), true);
  };
  const setSound = (on: boolean) => {
    if (!on) { if (reading.playing) reading.toggle(); setSilent(true); setSilentPlaying(playing); return; }
    setSilent(false);
    setSilentPlaying(false);
    if (playing) reading.seek(startOf(stage), true);
  };

  const sentences = splitSentences(words);
  const lit = !silent && reading.index >= 0 && stageOf(reading.index) === stage ? reading.index - startOf(stage) : -1;
  const scene = stage >= 0 && stage < last ? film.scenes[stage] : null;
  const started = stage >= 0 || reading.index >= 0 || playing;

  return <section className={`lib-movie${playing ? " is-playing" : ""}`} aria-label="Narrated film">
    <div className="lib-movie-stage">
      {scene
        ? <div className="lib-movie-scene" key={stage}>
          <SceneArtwork art={scene.art} label={scene.title} />
          <span className="lib-movie-chip">{stage + 1} of {last} · {scene.title}</span>
        </div>
        : <div className={`lib-movie-card${stage >= last ? " is-end" : ""}`} key={stage}>
          {stage >= last ? <><span className="lib-movie-done"><TickIcon size={26} /></span><p>{film.outro}</p></> : <><AliraMark reading={playing} /><p>{film.intro}</p></>}
        </div>}
      {!started && <button type="button" className="lib-movie-big-play" onClick={play} aria-label="Play the film with Alira"><PlayIcon size={34} /></button>}
    </div>
    <p className="lib-movie-caption" aria-live={silent ? "polite" : "off"}>
      {sentences.map((sentence, index) => <Fragment key={index}>{index > 0 ? " " : null}<span className={index === lit ? "lib-sen is-current" : "lib-sen"}>{sentence}</span></Fragment>)}
    </p>
    <div className="lib-movie-bar">
      <button type="button" className="lib-round-btn" onClick={() => goTo(stage - 1)} disabled={stage < 0} aria-label="Previous scene"><BackIcon size={18} /></button>
      <button type="button" className="lib-listen-play" onClick={play} aria-label={playing ? "Pause the film" : stage >= last ? "Watch again" : "Play the film"}>{playing ? <PauseIcon size={22} /> : <PlayIcon size={22} />}</button>
      <button type="button" className="lib-round-btn" onClick={() => goTo(stage + 1)} disabled={stage >= last} aria-label="Next scene"><ChevronIcon size={18} /></button>
      <ol className="lib-movie-dots" role="list" aria-label="Scenes">
        {film.scenes.map((item, index) => <li key={index}><button type="button" className={index < stage ? "is-past" : index === stage ? "is-on" : ""} aria-current={index === stage ? "step" : undefined} onClick={() => goTo(index)} aria-label={`Scene ${index + 1}: ${item.title}`} /></li>)}
      </ol>
      <div className="lib-movie-switches">
        <button type="button" role="switch" aria-checked={!silent} className="lib-switch" onClick={() => setSound(silent)}>Alira's voice<span className="lib-switch-track" aria-hidden="true"><i /></span></button>
        {!silent && <button type="button" role="switch" aria-checked={reading.slow} className="lib-switch" onClick={() => reading.setSlow(!reading.slow)}>Slower<span className="lib-switch-track" aria-hidden="true"><i /></span></button>}
      </div>
    </div>
    {voiceFailed
      ? <p className="lib-movie-note" role="status">Alira's voice did not start on this device, so the film plays with captions only.</p>
      : <p className="lib-sr" role="status">{silent ? "" : reading.note}</p>}
    {film.tool === "energy-diary" && <EnergyDiary />}
    <MediaSources sources={film.sources} note="A narrated animation made for Rehyn. The pictures are illustrations; the words are checked against the sources below." />
  </section>;
}

// ---- A conversation in two voices --------------------------------------------------------------

export function ConversationPlayer({ talk }: { talk: Conversation }) {
  const lines = useMemo(() => talk.lines.map(line => line.text), [talk]);
  const reading = useReadAloud(lines, true);
  const [shown, setShown] = useState(0);
  const [current, setCurrent] = useState<HTMLLIElement | null>(null);
  const [follow, setFollow] = useState(false);
  useEffect(() => { if (reading.index >= 0) setShown(count => Math.max(count, reading.index + 1)); }, [reading.index]);
  useEffect(() => { if (reading.done) setShown(lines.length); }, [reading.done, lines.length]);
  useKeepInView(current, follow || reading.playing);

  const who = (id: string) => talk.speakers.find(speaker => speaker.id === id);
  const topics = talk.lines.map((line, index) => ({ topic: line.topic, index })).filter((entry): entry is { topic: string; index: number } => Boolean(entry.topic));
  const visible = Math.min(lines.length, shown);
  const speaking = reading.playing ? reading.index : -1;
  const latest = speaking >= 0 ? speaking : visible - 1;
  const play = () => {
    if (reading.playing || reading.index >= 0) { reading.toggle(); return; }
    reading.seek(visible > 0 && visible < lines.length ? visible : 0, true);
  };
  const jump = (index: number) => {
    setFollow(true);
    setShown(count => Math.max(count, index + 1));
    if (reading.playing) reading.seek(index, true);
  };

  return <section className="lib-talk" aria-label="Conversation">
    <div className="lib-talk-people">
      {talk.speakers.map(speaker => <div key={speaker.id} className={`lib-talk-person${speaking >= 0 && talk.lines[speaking]?.who === speaker.id ? " is-speaking" : ""}`} style={{ ["--p-tint" as string]: speaker.tint.tint, ["--p-ink" as string]: speaker.tint.ink }}>
        <span className="lib-talk-face" aria-hidden="true">{speaker.name[0]}<i className="lib-eq"><b /><b /><b /></i></span>
        <span><b>{speaker.name}, {speaker.age}</b><small>{speaker.detail}</small></span>
      </div>)}
    </div>
    <p className="lib-talk-note">{talk.note}</p>
    <div className="lib-listen">
      <button type="button" className="lib-listen-play" onClick={play} aria-label={reading.playing ? "Pause" : visible > 0 ? "Carry on listening" : "Listen to the conversation"}>{reading.playing ? <PauseIcon size={22} /> : <PlayIcon size={22} />}</button>
      <div className="lib-listen-words">
        <p className="lib-listen-title"><AliraMark reading={reading.playing} />{reading.playing ? `${who(talk.lines[speaking]?.who ?? "")?.name ?? "Alira"} is speaking` : visible >= lines.length ? "The whole conversation is below" : "Listen, or read it line by line"}</p>
        <span className="lib-listen-track" aria-hidden="true"><i style={{ width: `${Math.round((visible / lines.length) * 100)}%` }} /></span>
      </div>
      <button type="button" role="switch" aria-checked={reading.slow} className="lib-switch" onClick={() => reading.setSlow(!reading.slow)}>Slower voice<span className="lib-switch-track" aria-hidden="true"><i /></span></button>
      <p className="lib-sr" role="status">{reading.note}</p>
    </div>
    <nav className="lib-talk-topics" aria-label="Parts of the conversation">
      {topics.map(entry => <button key={entry.index} type="button" className={`lib-chip-btn${entry.index < visible ? " is-reached" : ""}`} onClick={() => jump(entry.index)}>{entry.topic}</button>)}
    </nav>
    <ol className="lib-talk-thread" role="list">
      {talk.lines.slice(0, visible).map((line, index) => {
        const person = who(line.who);
        const side = talk.speakers[0]?.id === line.who ? "is-left" : "is-right";
        return <Fragment key={index}>
          {line.topic && <li className="lib-talk-topic" aria-hidden="true"><span>{line.topic}</span></li>}
          <li ref={index === latest ? setCurrent : undefined} className={`lib-talk-line ${side}${index === speaking ? " is-speaking" : ""}`} style={{ ["--p-tint" as string]: person?.tint.tint, ["--p-ink" as string]: person?.tint.ink }}>
            <span className="lib-talk-face is-small" aria-hidden="true">{person?.name[0]}</span>
            <p><b>{person?.name}</b>{line.text}</p>
          </li>
        </Fragment>;
      })}
    </ol>
    {visible < lines.length && !reading.playing && <div className="lib-step-row">
      <button type="button" className="lib-solid" onClick={() => { setFollow(true); setShown(visible + 1); }}>{visible === 0 ? "Start reading" : "Next line"}</button>
      <button type="button" className="lib-ghost" onClick={() => { setFollow(false); setShown(lines.length); }}>Show the whole conversation</button>
    </div>}
    <MediaSources sources={talk.sources} />
  </section>;
}

// ---- Breathing ---------------------------------------------------------------------------------

type BreathLog = { sessions: number; last?: string };
export function BreathingGuide({ piece }: { piece: Breathing }) {
  const reading = useReadAloud(piece.intro, true);
  const [length, setLength] = useState(piece.lengths[piece.lengths.length - 1] ?? 10);
  const [state, setState] = useState<"ready" | "running" | "paused" | "finished">("ready");
  const [elapsed, setElapsed] = useState(0);
  const [log, setLog] = useLocal<BreathLog>("rehyn.library-breathing.v1", { sessions: 0 });
  const total = length * 60;

  useEffect(() => {
    if (state !== "running") return;
    const timer = window.setInterval(() => setElapsed(seconds => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, [state]);
  useEffect(() => {
    if (state !== "running" || elapsed < total) return;
    setState("finished");
    setLog(previous => ({ sessions: (previous.sessions ?? 0) + 1, last: dayKey() }));
  }, [elapsed, total, state, setLog]);

  const cycle = piece.inCount + piece.outCount;
  const inCycle = elapsed % cycle;
  const breathingIn = inCycle < piece.inCount;
  const count = breathingIn ? inCycle + 1 : inCycle - piece.inCount + 1;
  const cue = piece.cues[Math.floor(elapsed / 60) % piece.cues.length];
  const left = Math.max(0, total - elapsed);
  const clock = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
  const start = () => { if (reading.playing) reading.toggle(); setElapsed(0); setState("running"); };

  return <section className={`lib-breathe is-${state}`} aria-label="Breathing guide">
    <div className="lib-breathe-intro">
      <ol role="list">{piece.intro.map((line, index) => <li key={index} className={reading.playing && reading.index === index ? "is-current" : ""}>{line}</li>)}</ol>
      <button type="button" className="lib-ghost" onClick={reading.toggle}>{reading.playing ? <><PauseIcon size={16} />Pause Alira</> : <><PlayIcon size={16} />Alira, read this to me</>}</button>
      <p className="lib-sr" role="status">{reading.note}</p>
    </div>
    <div className="lib-breathe-stage">
      <div className={`lib-breathe-circle${state === "running" ? breathingIn ? " is-in" : " is-out" : ""}`} style={{ ["--in" as string]: `${piece.inCount}s`, ["--out" as string]: `${piece.outCount}s` }} aria-hidden="true">
        <span className="lib-breathe-halo" />
        <span className="lib-breathe-core" />
      </div>
      <div className="lib-breathe-words" aria-live="polite">
        {state === "running" || state === "paused"
          ? <><b>{breathingIn ? "Breathe in" : "Breathe out"}</b><span className="lib-breathe-count">{count}</span></>
          : state === "finished" ? <><span className="lib-movie-done"><TickIcon size={26} /></span><b>{piece.close}</b></> : <b>Ready when you are</b>}
      </div>
    </div>
    {(state === "running" || state === "paused") && <p className="lib-breathe-cue" key={cue}>{cue}</p>}
    <div className="lib-breathe-bar">
      {state === "ready" || state === "finished" ? <>
        <div className="lib-choice-row" role="group" aria-label="How long">
          {piece.lengths.map(minutes => <button key={minutes} type="button" className="lib-choice" aria-pressed={length === minutes} onClick={() => setLength(minutes)}>{minutes} minutes</button>)}
        </div>
        <button type="button" className="lib-solid" onClick={start}>{state === "finished" ? "Breathe again" : "Start"}</button>
      </> : <>
        <span className="lib-breathe-clock" aria-label={`${clock} left`}>{clock}</span>
        <button type="button" className="lib-solid" onClick={() => setState(state === "running" ? "paused" : "running")}>{state === "running" ? "Pause" : "Carry on"}</button>
        <button type="button" className="lib-ghost" onClick={() => { setState("ready"); setElapsed(0); }}>Stop</button>
      </>}
    </div>
    {log.sessions > 0 && <p className="lib-try-note">You have taken {log.sessions === 1 ? "one quiet break" : `${log.sessions} quiet breaks`} with this guide on this device.</p>}
    <MediaSources sources={piece.sources} note="The breathing follows the NHS guide: in through your nose, out through your mouth, counting to five, for at least five minutes." />
  </section>;
}

// ---- Arm and hand practice ---------------------------------------------------------------------

type Exercise = { id: string; name: string; target: number };
type PracticeLog = { start?: string; days: string[]; exercises: Exercise[]; counts: Record<string, { day: string; reps: number }>; ideas: string[] };
const EMPTY_PRACTICE: PracticeLog = { days: [], exercises: [], counts: {}, ideas: [] };
const addDays = (key: string, days: number) => {
  const [year, month, day] = key.split("-").map(Number);
  return dayKey(new Date(year, (month ?? 1) - 1, (day ?? 1) + days));
};

export function PracticeSet({ piece }: { piece: Practice }) {
  const [stored, setLog] = useLocal<PracticeLog>("rehyn.library-practice.v1", EMPTY_PRACTICE);
  const log: PracticeLog = { ...EMPTY_PRACTICE, ...stored };
  const [name, setName] = useState("");
  const [target, setTarget] = useState(10);
  const [bump, setBump] = useState<string | null>(null);
  const today = dayKey();
  const start = log.start ?? today;
  const markToday = (previous: PracticeLog): PracticeLog => ({ ...previous, start: previous.start ?? today, days: previous.days.includes(today) ? previous.days : [...previous.days, today] });
  const update = (change: (previous: PracticeLog) => PracticeLog) => setLog(previous => change({ ...EMPTY_PRACTICE, ...previous }));

  const add = (event: FormEvent) => {
    event.preventDefault();
    const clean = name.trim();
    if (!clean) return;
    update(previous => ({ ...previous, exercises: [...previous.exercises, { id: `${Date.now()}`, name: clean.slice(0, 80), target: Math.max(1, Math.min(200, target || 1)) }] }));
    setName("");
  };
  const repsToday = (id: string) => log.counts[id]?.day === today ? log.counts[id].reps : 0;
  const rep = (exercise: Exercise) => {
    setBump(exercise.id);
    window.setTimeout(() => setBump(null), 320);
    update(previous => markToday({ ...previous, counts: { ...previous.counts, [exercise.id]: { day: today, reps: (previous.counts[exercise.id]?.day === today ? previous.counts[exercise.id].reps : 0) + 1 } } }));
  };
  const toggleToday = () => update(previous => previous.days.includes(today) ? { ...previous, days: previous.days.filter(day => day !== today) } : markToday(previous));
  const toggleIdea = (idea: string) => update(previous => ({ ...previous, ideas: previous.ideas.includes(idea) ? previous.ideas.filter(other => other !== idea) : [...previous.ideas, idea] }));
  const restart = () => { if (typeof window === "undefined" || window.confirm("Clear your practice log and start the twelve weeks again?")) setLog(EMPTY_PRACTICE); };

  const dayNumber = Math.floor((new Date(today).getTime() - new Date(start).getTime()) / 86400000);
  const week = Math.min(12, Math.max(1, Math.floor(dayNumber / 7) + 1));
  const practised = log.days.filter(day => day >= start && day <= addDays(start, 83)).length;

  return <section className="lib-practice" aria-label="Practice set">
    <p className="lib-practice-intro">{piece.intro}</p>
    <ol className="lib-principles" role="list">
      {piece.principles.map((principle, index) => <li key={principle.title} style={{ animationDelay: `${index * 0.08}s` }}><span aria-hidden="true">{index + 1}</span><b>{principle.title}</b><p>{principle.text}</p></li>)}
    </ol>
    <p className="lib-safety" role="note">{piece.safety}</p>

    <div className="lib-practice-block">
      <h3>Your exercises</h3>
      <p className="lib-try-intro">Add the exercises your physiotherapist gave you, the way they wrote them down. Tap the circle each time you do one.</p>
      <form className="lib-practice-add" onSubmit={add}>
        <label className="lib-field"><span>Exercise</span><input value={name} onChange={event => setName(event.target.value)} maxLength={80} autoComplete="off" /></label>
        <label className="lib-field is-small"><span>Times a day</span><input type="number" min={1} max={200} value={target} onChange={event => setTarget(Number(event.target.value))} /></label>
        <button type="submit" className="lib-solid" disabled={!name.trim()}>Add</button>
      </form>
      {log.exercises.length > 0 && <ul className="lib-reps" role="list">
        {log.exercises.map(exercise => {
          const reps = repsToday(exercise.id);
          const share = Math.min(1, reps / exercise.target);
          return <li key={exercise.id} className={reps >= exercise.target ? "is-done" : ""}>
            <button type="button" className={`lib-rep-ring${bump === exercise.id ? " is-bump" : ""}`} onClick={() => rep(exercise)} aria-label={`Add one: ${exercise.name}. ${reps} of ${exercise.target} today`}>
              <svg viewBox="0 0 44 44" aria-hidden="true"><circle className="lib-ring-track" cx="22" cy="22" r="19" /><circle className="lib-ring-fill" cx="22" cy="22" r="19" pathLength={100} style={{ strokeDashoffset: 100 - share * 100 }} /></svg>
              <span>{reps >= exercise.target ? <TickIcon size={18} /> : "+1"}</span>
            </button>
            <span className="lib-rep-words"><b>{exercise.name}</b><small>{reps} of {exercise.target} today</small></span>
            <button type="button" className="lib-text-btn" onClick={() => update(previous => ({ ...previous, exercises: previous.exercises.filter(other => other.id !== exercise.id) }))} aria-label={`Remove ${exercise.name}`}>Remove</button>
          </li>;
        })}
      </ul>}
    </div>

    <div className="lib-practice-block">
      <div className="lib-practice-head">
        <h3>Your twelve weeks</h3>
        <p className="lib-try-note">{log.start ? `Week ${week} of 12 · ${practised} practice ${practised === 1 ? "day" : "days"}` : "Your twelve weeks start the first day you log some practice."}</p>
      </div>
      <div className="lib-weeks" role="grid" aria-label="Practice days over twelve weeks">
        {Array.from({ length: 12 }, (_, row) => <div key={row} role="row" className="lib-week-row">
          <span role="rowheader">Week {row + 1}</span>
          {Array.from({ length: 7 }, (_, column) => {
            const day = addDays(start, row * 7 + column);
            const done = log.days.includes(day);
            const isToday = day === today;
            return <span key={column} role="gridcell" aria-label={`${longDate(day)}${done ? ", practised" : ""}${isToday ? ", today" : ""}`} className={`lib-day${done ? " is-done" : ""}${isToday ? " is-today" : ""}${day > today ? " is-ahead" : ""}`} />;
          })}
        </div>)}
      </div>
      <div className="lib-step-row">
        <button type="button" className={log.days.includes(today) ? "lib-ghost" : "lib-solid"} onClick={toggleToday}>{log.days.includes(today) ? <><TickIcon size={16} />Practised today</> : "I practised today"}</button>
        {log.start && <button type="button" className="lib-text-btn" onClick={restart}>Start again</button>}
      </div>
    </div>

    <div className="lib-practice-block">
      <h3>Everyday ideas to ask your physiotherapist about</h3>
      <ul className="lib-tick-list" role="list">
        {piece.ideas.map(idea => <li key={idea} className={log.ideas.includes(idea) ? "is-on" : ""}>
          <label className="lib-tick">
            <input type="checkbox" checked={log.ideas.includes(idea)} onChange={() => toggleIdea(idea)} />
            <span className="lib-tick-box" aria-hidden="true"><TickIcon size={14} /></span>
            <span className="lib-tick-label">{idea}</span>
          </label>
        </li>)}
      </ul>
      {log.ideas.length > 0 && <p className="lib-try-note">Ticked to ask about at your next session: {log.ideas.length}.</p>}
    </div>
    <MediaSources sources={piece.sources} note="Your exercises and ticks stay on this device." />
  </section>;
}

// ---- Energy diary ------------------------------------------------------------------------------

type DiaryDay = { m?: number; a?: number; e?: number; note?: string };
type Diary = Record<string, DiaryDay>;
const PARTS = [["m", "Morning"], ["a", "Afternoon"], ["e", "Evening"]] as const;
const LEVELS = ["Not filled in", "Low", "Some", "Good"];
const escape = (text: string) => text.replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char] ?? char);

export function EnergyDiary() {
  const [diary, setDiary] = useLocal<Diary>("rehyn.library-energy-diary.v1", {});
  const [offset, setOffset] = useState(0);
  const monday = addDays(weekKey(), offset * 7);
  const days = Array.from({ length: 7 }, (_, index) => addDays(monday, index));
  const today = dayKey();
  const set = (day: string, change: DiaryDay) => setDiary(previous => ({ ...previous, [day]: { ...previous[day], ...change } }));
  const cycle = (day: string, part: "m" | "a" | "e") => set(day, { [part]: ((diary[day]?.[part] ?? 0) + 1) % LEVELS.length });
  const label = (day: string) => new Date(`${day}T12:00:00`).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  const paper = useRef<string>("");
  paper.current = `<!doctype html><html><head><meta charset="utf-8"><title>Energy diary</title><style>body{font:14px/1.5 system-ui,sans-serif;margin:32px;color:#24362F}h1{font:600 24px Georgia,serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #CFD8D0;padding:8px;text-align:left;vertical-align:top}th{background:#F1F7F2}</style></head><body><h1>Energy diary, week of ${escape(longDate(monday))}</h1><p>Energy: Low, Some or Good. Bring this to your next appointment.</p><table><tr><th>Day</th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>What I did</th></tr>${days.map(day => `<tr><td>${escape(label(day))}</td>${PARTS.map(([part]) => `<td>${escape(diary[day]?.[part] ? LEVELS[diary[day]?.[part] ?? 0] : "")}</td>`).join("")}<td>${escape(diary[day]?.note ?? "")}</td></tr>`).join("")}</table></body></html>`;
  const print = () => {
    const page = window.open("", "_blank", "width=820,height=640");
    if (!page) return;
    page.document.write(paper.current);
    page.document.close();
    page.focus();
    page.print();
  };

  return <section className="lib-diary" aria-label="Energy diary">
    <div className="lib-practice-head">
      <h3>Your energy diary</h3>
      <div className="lib-week-nav">
        <button type="button" className="lib-round-btn" onClick={() => setOffset(offset - 1)} aria-label="Previous week"><BackIcon size={16} /></button>
        <span>Week of {longDate(monday)}</span>
        <button type="button" className="lib-round-btn" onClick={() => setOffset(offset + 1)} disabled={offset >= 0} aria-label="Next week"><ChevronIcon size={16} /></button>
      </div>
    </div>
    <p className="lib-try-intro">Tap a part of the day to set your energy: low, some or good. Add a few words about what you did. It stays on this device.</p>
    <div className="lib-diary-grid" role="table" aria-label={`Energy, week of ${longDate(monday)}`}>
      <div role="row" className="lib-diary-row is-head"><span role="columnheader">Day</span>{PARTS.map(([, name]) => <span key={name} role="columnheader">{name}</span>)}<span role="columnheader">What I did</span></div>
      {days.map(day => <div role="row" key={day} className={`lib-diary-row${day === today ? " is-today" : ""}${day > today ? " is-ahead" : ""}`}>
        <span role="rowheader">{label(day)}</span>
        {PARTS.map(([part, name]) => {
          const level = diary[day]?.[part] ?? 0;
          return <span role="cell" key={part}><button type="button" className={`lib-energy is-${level}`} disabled={day > today} onClick={() => cycle(day, part)} aria-label={`${label(day)}, ${name}: ${LEVELS[level]}. Tap to change.`}>
            <i /><i /><i /><small>{level ? LEVELS[level] : ""}</small>
          </button></span>;
        })}
        <span role="cell"><input className="lib-diary-note" value={diary[day]?.note ?? ""} disabled={day > today} maxLength={120} onChange={event => set(day, { note: event.target.value })} aria-label={`${label(day)}: what I did`} /></span>
      </div>)}
    </div>
    <div className="lib-step-row">
      <button type="button" className="lib-solid" onClick={print}>Print this week</button>
    </div>
  </section>;
}
