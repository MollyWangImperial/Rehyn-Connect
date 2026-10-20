import { useId, useState, type ReactNode } from "react";
import type { DrivingRules, LearnInteractive, QuickCheck as QuickCheckData } from "@/content/learn-interactive";
import { longDate, useLocal, weekKey } from "@/lib/library-local";
import { ExternalIcon, TickIcon } from "./parts";

// The hands-on parts of a written answer (content/learn-interactive.ts): something to tap, tick or
// turn over, a quick check, and three things to try this week. Every word they show comes from the
// answer's own checked content. Anything a reader fills in stays in this browser.

function Box({ kicker = "Try it", title, children, className = "" }: { kicker?: string; title: string; children: ReactNode; className?: string }) {
  const id = useId();
  return <section className={`lib-try-box ${className}`} aria-labelledby={id}>
    <p className="lib-try-kicker">{kicker}</p>
    <h3 id={id}>{title}</h3>
    {children}
  </section>;
}

export function Interactive({ data }: { data: LearnInteractive }) {
  switch (data.kind) {
    case "brain-sides": return <BrainSides {...data} />;
    case "risk-check": return <RiskCheck {...data} />;
    case "compare": return <CompareTypes {...data} />;
    case "flip-cards": return <FlipCards {...data} />;
    case "timeline": return <Timeline {...data} />;
    case "driving": return <DrivingGuide title={data.title} rules={data.rules} />;
    case "employer-note": return <EmployerNote {...data} />;
    case "signs": return <SignsChecklist {...data} />;
    case "scenarios": return <Scenarios {...data} />;
  }
}

// ---- Which side of the brain moves which side of the body -------------------------------------

type Side = "left" | "right";
function BrainSides({ title, left, right, note }: Extract<LearnInteractive, { kind: "brain-sides" }>) {
  const [side, setSide] = useState<Side | null>(null);
  const body: Side | null = side === "left" ? "right" : side === "right" ? "left" : null;
  return <Box title={title} className="lib-brain-sides">
    <div className="lib-brain-stage">
      <svg viewBox="0 0 320 270" className={`lib-brain-svg${side ? ` is-${side}` : ""}`} aria-hidden="true" focusable="false">
        <text x="160" y="12" className="lib-svg-caption" textAnchor="middle">Seen from behind</text>
        <path className={`lib-hemi${side === "left" ? " is-on" : ""}`} d="M157 24 C112 22 90 50 94 78 C98 106 126 120 157 116 Z" onClick={() => setSide("left")} />
        <path className={`lib-hemi${side === "right" ? " is-on" : ""}`} d="M163 24 C208 22 230 50 226 78 C222 106 194 120 163 116 Z" onClick={() => setSide("right")} />
        <path className="lib-gyrus" d="M110 60 q14 -10 28 0 M106 86 q16 -10 32 0 M182 60 q14 -10 28 0 M182 86 q16 -10 32 0" />
        <text x="122" y="136" className="lib-svg-label" textAnchor="middle">Left brain</text>
        <text x="198" y="136" className="lib-svg-label" textAnchor="middle">Right brain</text>
        <g className="lib-figure">
          <circle cx="160" cy="160" r="13" />
          <rect x="142" y="176" width="36" height="50" rx="12" />
          <path className={`lib-limb${body === "left" ? " is-on" : ""}`} d="M144 184 L118 228" />
          <path className={`lib-limb${body === "right" ? " is-on" : ""}`} d="M176 184 L202 228" />
          <path className={`lib-limb${body === "left" ? " is-on" : ""}`} d="M152 224 L144 262" />
          <path className={`lib-limb${body === "right" ? " is-on" : ""}`} d="M168 224 L176 262" />
        </g>
        <text x="96" y="252" className="lib-svg-label" textAnchor="middle">Left side</text>
        <text x="224" y="252" className="lib-svg-label" textAnchor="middle">Right side</text>
        {side && <path key={side} className="lib-cross-line" d={side === "left" ? "M128 84 C130 140 196 136 202 214" : "M192 84 C190 140 124 136 118 214"} />}
      </svg>
      <div className="lib-choice-row" role="group" aria-label="Choose a side of the brain">
        <button type="button" className="lib-choice" aria-pressed={side === "left"} onClick={() => setSide("left")}>Left side of the brain</button>
        <button type="button" className="lib-choice" aria-pressed={side === "right"} onClick={() => setSide("right")}>Right side of the brain</button>
      </div>
    </div>
    <p className="lib-try-result" aria-live="polite">{side === "left" ? left : side === "right" ? right : "Tap a side to see which side of the body it moves."}</p>
    <p className="lib-try-note">{note}</p>
  </Box>;
}

// ---- Risk factors ------------------------------------------------------------------------------

function RiskCheck({ title, intro, items }: Extract<LearnInteractive, { kind: "risk-check" }>) {
  const [ticked, setTicked] = useState<string[]>([]);
  const chosen = items.filter(item => ticked.includes(item.id));
  const changeable = chosen.filter(item => item.changeable).length;
  const toggle = (id: string) => setTicked(list => list.includes(id) ? list.filter(other => other !== id) : [...list, id]);
  return <Box title={title}>
    <p className="lib-try-intro">{intro}</p>
    <ul className="lib-tick-list" role="list">
      {items.map(item => {
        const on = ticked.includes(item.id);
        return <li key={item.id} className={on ? "is-on" : ""}>
          <label className="lib-tick">
            <input type="checkbox" checked={on} onChange={() => toggle(item.id)} />
            <span className="lib-tick-box" aria-hidden="true"><TickIcon size={14} /></span>
            <span className="lib-tick-label">{item.label}</span>
          </label>
          <div className="lib-reveal" aria-hidden={!on}><p className={item.changeable ? "is-good" : ""}>{item.note}</p></div>
        </li>;
      })}
    </ul>
    <div className="lib-meter" aria-live="polite">
      <span className="lib-meter-track" aria-hidden="true"><i style={{ width: `${chosen.length ? Math.round((changeable / chosen.length) * 100) : 0}%` }} /></span>
      <p>{chosen.length === 0 ? "Tick any that apply to see what can be done." : changeable === chosen.length
        ? `All ${chosen.length} you ticked can be treated or changed.`
        : `${changeable} of the ${chosen.length} you ticked can be treated or changed.`}</p>
    </div>
  </Box>;
}

// ---- Three kinds of stroke ---------------------------------------------------------------------

type TypeId = "ischaemic" | "haemorrhagic" | "tia";
function ArteryPicture({ type }: { type: TypeId }) {
  return <svg viewBox="0 0 320 120" className={`lib-artery is-${type}`} aria-hidden="true" focusable="false">
    <path className="lib-artery-wall" d="M10 38 H310 M10 82 H310" />
    <path className="lib-artery-fill" d="M10 40 H310 V80 H10 Z" />
    {type === "ischaemic" && <>
      <line className="lib-flow" x1="12" y1="60" x2="146" y2="60" />
      <line className="lib-flow is-still" x1="196" y1="60" x2="308" y2="60" />
      <ellipse className="lib-clot" cx="170" cy="60" rx="26" ry="20" />
    </>}
    {type === "haemorrhagic" && <>
      <line className="lib-flow" x1="12" y1="60" x2="308" y2="60" />
      <path className="lib-tear" d="M150 82 l8 10 l6 -10" />
      <circle className="lib-drop" cx="158" cy="96" r="5" />
      <circle className="lib-drop is-late" cx="166" cy="96" r="4" />
    </>}
    {type === "tia" && <>
      <line className="lib-flow" x1="12" y1="60" x2="308" y2="60" />
      <ellipse className="lib-clot is-passing" cx="170" cy="60" rx="22" ry="18" />
    </>}
  </svg>;
}

function CompareTypes({ title, types }: Extract<LearnInteractive, { kind: "compare" }>) {
  const [pick, setPick] = useState<TypeId>(types[0]?.id ?? "ischaemic");
  const shown = types.find(type => type.id === pick) ?? types[0];
  const base = useId();
  if (!shown) return null;
  return <Box title={title}>
    <div className="lib-tabs" role="tablist" aria-label="Kinds of stroke">
      {types.map(type => <button key={type.id} type="button" role="tab" id={`${base}-${type.id}`} aria-selected={pick === type.id} aria-controls={`${base}-panel`} className="lib-tab" onClick={() => setPick(type.id)}>{type.name}</button>)}
    </div>
    <div className="lib-tab-panel" role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-${shown.id}`} key={shown.id}>
      <ArteryPicture type={shown.id} />
      <p className="lib-share">{shown.share}</p>
      <dl className="lib-type-facts">
        <div><dt>What happens</dt><dd>{shown.what}</dd></div>
        <div><dt>The signs</dt><dd>{shown.signs}</dd></div>
        <div><dt>What happens next</dt><dd>{shown.next}</dd></div>
      </dl>
    </div>
  </Box>;
}

// ---- Cards that turn over ----------------------------------------------------------------------

function FlipCards({ title, intro, cards }: Extract<LearnInteractive, { kind: "flip-cards" }>) {
  const [turned, setTurned] = useState<string[]>([]);
  const flip = (id: string) => setTurned(list => list.includes(id) ? list.filter(other => other !== id) : [...list, id]);
  return <Box title={title}>
    <p className="lib-try-intro">{intro} <span className="lib-try-count">Turned {turned.length} of {cards.length}</span></p>
    <ul className="lib-flip-grid" role="list">
      {cards.map(card => {
        const on = turned.includes(card.id);
        return <li key={card.id}>
          <button type="button" className={`lib-flip${on ? " is-turned" : ""}`} aria-pressed={on} onClick={() => flip(card.id)}>
            <span className="lib-flip-inner">
              <span className="lib-flip-face is-front" aria-hidden={on}><b>{card.front}</b><small>{card.when}</small><em>Tap to turn over</em></span>
              <span className="lib-flip-face is-back" aria-hidden={!on}><b>{card.front}</b>{card.back}</span>
            </span>
          </button>
        </li>;
      })}
    </ul>
  </Box>;
}

// ---- The first months, one stop at a time -----------------------------------------------------

function Timeline({ title, steps }: Extract<LearnInteractive, { kind: "timeline" }>) {
  const [at, setAt] = useState(0);
  const step = steps[at];
  const id = useId();
  if (!step) return null;
  const share = steps.length > 1 ? at / (steps.length - 1) : 1;
  return <Box title={title}>
    <div className="lib-timeline" style={{ ["--lib-at" as string]: share }}>
      <label htmlFor={id} className="lib-sr">Point in time</label>
      <input id={id} type="range" min={0} max={steps.length - 1} step={1} value={at} onChange={event => setAt(Number(event.target.value))} aria-valuetext={`${step.when}: ${step.title}`} />
      <ol className="lib-timeline-stops" role="list">
        {steps.map((stop, index) => <li key={stop.id}><button type="button" className={index <= at ? "is-past" : ""} aria-current={index === at ? "step" : undefined} onClick={() => setAt(index)}><i aria-hidden="true" />{stop.when}</button></li>)}
      </ol>
    </div>
    <div className="lib-timeline-card" key={step.id} aria-live="polite">
      <p className="lib-share">{step.when}</p>
      <h4>{step.title}</h4>
      <ul role="list">{step.points.map(point => <li key={point}>{point}</li>)}</ul>
    </div>
    <div className="lib-step-row">
      <button type="button" className="lib-ghost" disabled={at === 0} onClick={() => setAt(at - 1)}>Earlier</button>
      <button type="button" className="lib-ghost" disabled={at === steps.length - 1} onClick={() => setAt(at + 1)}>Later</button>
    </div>
  </Box>;
}

// ---- Driving: what the rules say for you -------------------------------------------------------

function DrivingGuide({ title, rules }: { title: string; rules: DrivingRules }) {
  const [licence, setLicence] = useState<"car" | "bus" | null>(null);
  const [ticked, setTicked] = useState<number[]>([]);
  const toggle = (index: number) => setTicked(list => list.includes(index) ? list.filter(other => other !== index) : [...list, index]);
  return <Box title={title} className="lib-driving">
    <p className="lib-try-intro">Which licence do you have?</p>
    <div className="lib-choice-row" role="group" aria-label="Your licence">
      <button type="button" className="lib-choice" aria-pressed={licence === "car"} onClick={() => setLicence("car")}>Car or motorcycle</button>
      <button type="button" className="lib-choice" aria-pressed={licence === "bus"} onClick={() => setLicence("bus")}>Bus, coach or lorry</button>
    </div>
    {licence === "car" && <div className="lib-step-in" key="car">
      <div className="lib-big-rule"><span className="lib-big-num">1<small>month</small></span><p>{rules.car.stop}</p></div>
      <p className="lib-try-intro">{rules.car.ask}</p>
      <ul className="lib-tick-list" role="list">
        {rules.car.checks.map((check, index) => <li key={check} className={ticked.includes(index) ? "is-on" : ""}>
          <label className="lib-tick">
            <input type="checkbox" checked={ticked.includes(index)} onChange={() => toggle(index)} />
            <span className="lib-tick-box" aria-hidden="true"><TickIcon size={14} /></span>
            <span className="lib-tick-label">{check}</span>
          </label>
        </li>)}
      </ul>
      <p className={`lib-verdict${ticked.length ? " is-tell" : " is-ok"}`} aria-live="polite">{ticked.length ? rules.car.tell : rules.car.noTell}</p>
    </div>}
    {licence === "bus" && <div className="lib-step-in" key="bus">
      <div className="lib-big-rule is-tell"><span className="lib-big-num">1<small>year</small></span><p>{rules.bus}</p></div>
    </div>}
    <p className="lib-try-note">{rules.fine} <a href={rules.source.url} target="_blank" rel="noopener noreferrer">{rules.source.label}<ExternalIcon size={12} /><span className="lib-sr"> (opens in a new tab)</span></a></p>
  </Box>;
}

// ---- A note to an employer ---------------------------------------------------------------------

type NoteFields = { manager: string; name: string; stroke: string; leave: string; touch: string };
const EMPTY_NOTE: NoteFields = { manager: "", name: "", stroke: "", leave: "", touch: "" };

function EmployerNote({ title, intro, policyAsk }: Extract<LearnInteractive, { kind: "employer-note" }>) {
  const [fields, setFields] = useLocal<NoteFields>("rehyn.library-employer-note.v1", EMPTY_NOTE);
  const [copied, setCopied] = useState(false);
  const id = useId();
  const set = (key: keyof NoteFields) => (event: { target: { value: string } }) => { setCopied(false); setFields(previous => ({ ...EMPTY_NOTE, ...previous, [key]: event.target.value })); };
  const date = (value: string) => value ? longDate(value) : "[date]";
  const lines = [
    `Dear ${fields.manager || "[name]"},`,
    "",
    `I am writing to let you know that I had a stroke on ${date(fields.stroke)}. I am taking part in rehabilitation, and I expect to leave hospital around ${date(fields.leave)}.`,
    `I will be in touch again by ${date(fields.touch)}.`,
    policyAsk,
    "",
    "Best wishes,",
    fields.name || "[your name]",
  ];
  const copy = async () => {
    try { await navigator.clipboard.writeText(lines.join("\n")); setCopied(true); } catch { setCopied(false); }
  };
  const field = (key: keyof NoteFields, label: string, type = "text") => <label className="lib-field" htmlFor={`${id}-${key}`}>
    <span>{label}</span>
    <input id={`${id}-${key}`} type={type} value={fields[key] ?? ""} onChange={set(key)} autoComplete="off" />
  </label>;
  return <Box title={title} className="lib-note-maker">
    <p className="lib-try-intro">{intro}</p>
    <div className="lib-note-grid">
      <div className="lib-note-fields">
        {field("stroke", "The date of your stroke", "date")}
        {field("leave", "When you expect to leave hospital", "date")}
        {field("touch", "When you will be back in touch", "date")}
        {field("manager", "Your manager's name")}
        {field("name", "Your name")}
      </div>
      <div className="lib-note-paper" aria-live="polite">
        {lines.map((line, index) => line ? <p key={index}>{line.split(/(\[[^\]]+\])/).map((part, at) => part.startsWith("[") ? <mark key={at}>{part}</mark> : part)}</p> : <br key={index} />)}
      </div>
    </div>
    <div className="lib-step-row">
      <button type="button" className="lib-solid" onClick={copy}>{copied ? <><TickIcon size={16} />Copied</> : "Copy the note"}</button>
      <button type="button" className="lib-ghost" onClick={() => { setFields(EMPTY_NOTE); setCopied(false); }}>Clear</button>
    </div>
  </Box>;
}

// ---- Signs to tell the team about --------------------------------------------------------------

function SignsChecklist({ title, intro, signs, after, copyHeading = "Things we have noticed" }: Extract<LearnInteractive, { kind: "signs" }>) {
  const [ticked, setTicked] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const toggle = (sign: string) => { setCopied(false); setTicked(list => list.includes(sign) ? list.filter(other => other !== sign) : [...list, sign]); };
  const chosen = signs.filter(sign => ticked.includes(sign));
  const copy = async () => {
    try { await navigator.clipboard.writeText([copyHeading, ...chosen.map(sign => `- ${sign}`)].join("\n")); setCopied(true); } catch { setCopied(false); }
  };
  return <Box title={title}>
    <p className="lib-try-intro">{intro}</p>
    <ul className="lib-tick-list is-two" role="list">
      {signs.map(sign => <li key={sign} className={ticked.includes(sign) ? "is-on" : ""}>
        <label className="lib-tick">
          <input type="checkbox" checked={ticked.includes(sign)} onChange={() => toggle(sign)} />
          <span className="lib-tick-box" aria-hidden="true"><TickIcon size={14} /></span>
          <span className="lib-tick-label">{sign}</span>
        </label>
      </li>)}
    </ul>
    {chosen.length > 0 && <div className="lib-tell-card lib-step-in">
      <p className="lib-share">To tell your team</p>
      <ul role="list">{chosen.map(sign => <li key={sign}>{sign}</li>)}</ul>
      <p>{after}</p>
      <button type="button" className="lib-solid" onClick={copy}>{copied ? <><TickIcon size={16} />Copied</> : "Copy this list"}</button>
    </div>}
  </Box>;
}

// ---- Everyday moments --------------------------------------------------------------------------

function Scenarios({ title, scenarios }: Extract<LearnInteractive, { kind: "scenarios" }>) {
  const [at, setAt] = useState(0);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const scenario = scenarios[at];
  if (!scenario) return null;
  const picked = picks[scenario.id];
  const best = scenarios.filter(item => picks[item.id] !== undefined && item.options[picks[item.id]]?.best).length;
  const answered = Object.keys(picks).length;
  return <Box title={title} className="lib-scenarios">
    <div className="lib-scene-dots" aria-hidden="true">{scenarios.map((item, index) => <i key={item.id} className={index === at ? "is-on" : picks[item.id] !== undefined ? "is-done" : ""} />)}</div>
    <div className="lib-scenario lib-step-in" key={scenario.id}>
      <p className="lib-share">Moment {at + 1} of {scenarios.length}</p>
      <p className="lib-scenario-q">{scenario.situation}</p>
      <div className="lib-options">
        {scenario.options.map((option, index) => {
          const state = picked === undefined ? "" : option.best ? " is-best" : picked === index ? " is-other" : " is-faded";
          return <button key={option.text} type="button" className={`lib-option${state}`} aria-pressed={picked === index} disabled={picked !== undefined} onClick={() => setPicks({ ...picks, [scenario.id]: index })}>
            {option.text}{picked !== undefined && option.best && <TickIcon size={16} />}
          </button>;
        })}
      </div>
      {picked !== undefined && <p className="lib-try-result" aria-live="polite">{scenario.why}</p>}
    </div>
    <div className="lib-step-row">
      <button type="button" className="lib-ghost" disabled={at === 0} onClick={() => setAt(at - 1)}>Back</button>
      {at < scenarios.length - 1
        ? <button type="button" className="lib-solid" disabled={picked === undefined} onClick={() => setAt(at + 1)}>Next moment</button>
        : answered === scenarios.length && <p className="lib-try-note">You chose what helps most in {best} of {scenarios.length}. <button type="button" className="lib-text-btn" onClick={() => { setPicks({}); setAt(0); }}>Start again</button></p>}
    </div>
  </Box>;
}

// ---- One question to check the main point ------------------------------------------------------

export function QuickCheck({ quiz }: { quiz: QuickCheckData }) {
  const [picked, setPicked] = useState<number | null>(null);
  const right = picked !== null && Boolean(quiz.options[picked]?.right);
  return <Box kicker="Quick check" title={quiz.question} className="lib-quiz">
    <div className="lib-options">
      {quiz.options.map((option, index) => {
        const state = picked === null ? "" : option.right ? " is-best" : picked === index ? " is-wrong" : " is-faded";
        return <button key={option.text} type="button" className={`lib-option${state}`} aria-pressed={picked === index} disabled={picked !== null} onClick={() => setPicked(index)}>
          {option.text}{picked !== null && option.right && <TickIcon size={16} />}
        </button>;
      })}
    </div>
    {picked !== null && <div className="lib-step-in" aria-live="polite">
      <p className={`lib-verdict${right ? " is-ok" : " is-soft"}`}><b>{right ? "That's right." : "Not quite."}</b> {quiz.why}</p>
      <button type="button" className="lib-text-btn" onClick={() => setPicked(null)}>Try it again</button>
    </div>}
  </Box>;
}

// ---- Three things to try this week -------------------------------------------------------------

type TryState = Record<string, { week: string; done: number[] }>;
export function TryThisWeek({ articleId, items }: { articleId: string; items: string[] }) {
  const [all, setAll] = useLocal<TryState>("rehyn.library-try.v1", {});
  const week = weekKey();
  const mine = all[articleId]?.week === week ? all[articleId].done : [];
  const toggle = (index: number) => setAll(previous => {
    const current = previous[articleId]?.week === week ? previous[articleId].done : [];
    const done = current.includes(index) ? current.filter(other => other !== index) : [...current, index];
    return { ...previous, [articleId]: { week, done } };
  });
  const finished = items.length > 0 && mine.length >= items.length;
  return <Box kicker="This week" title="Three things to try" className={`lib-try-week${finished ? " is-finished" : ""}`}>
    <ul className="lib-tick-list" role="list">
      {items.map((item, index) => <li key={item} className={mine.includes(index) ? "is-on" : ""}>
        <label className="lib-tick">
          <input type="checkbox" checked={mine.includes(index)} onChange={() => toggle(index)} />
          <span className="lib-tick-box" aria-hidden="true"><TickIcon size={14} /></span>
          <span className="lib-tick-label">{item}</span>
        </label>
      </li>)}
    </ul>
    <p className="lib-try-note" aria-live="polite">{finished ? <span className="lib-cheer">All three this week. Well done.</span> : `${mine.length} of ${items.length} done this week. Your ticks stay on this device and start fresh each Monday.`}</p>
  </Box>;
}
